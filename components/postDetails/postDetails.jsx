"use client";
import "./postDetails.css";
import Post from "../post/post";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";

export default function PostDetails({ productID }) {
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [mainImg, setMainImg] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getPost() {
            setIsLoading(true);
            try{
                const res = await fetch(
                    `https://dummyjson.com/products/${productID}`
                );
                const postsData = await res.json();
                setPost(postsData);
                setMainImg(postsData.images[0]);
                setIsLoading(false);
            }catch(err){
                setError(true);
            }
        }
        getPost();
    }, []);

    const handelChangeImg = (e) => {
        setMainImg(e.target.src);
        document.querySelectorAll('.bottom img').forEach(img => {
            img.classList.remove('active');
        });
        e.target.classList.add("active");
    }

    return (
        <section className="post-page">
            <h1 className="title-section">Post Details</h1>
            <Suspense>
                {!error ? isLoading ? (
                    <p>Loading Post Details...</p>
                ) : (
                    <div className="post-box">
                        <div className="left">
                            <img src={mainImg} className="main-img" />
                            <div className="bottom">
                                {post.images && post.images.map((image, index) => {
                                    if(index < 4){
                                        return <img key={index} className={index == 0 && "active"} src={image} onClick={handelChangeImg} />
                                    }
                                })}
                            </div>
                        </div>
                        <div className="right">
                            <h1>{post.title}</h1>
                            <h2>${post.price}</h2>
                            <p>{post.description}</p>
                        </div>
                    </div>
                ) : <h1>Not Found Product 404</h1>}
            </Suspense>
        </section>
    );
}
