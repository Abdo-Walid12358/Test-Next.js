"use client";
import "./posts.css";
import Post from "../post/post";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    
    useEffect(() => {
        async function getPosts() {
            setIsLoading(true);

            const res = await fetch(
                "https://dummyjson.com/products"
            );
            const postsData = await res.json();

            if(searchValue.trim() != '' && searchValue.trim() != undefined){
                const filteredPosts = postsData.products.filter(post =>
                    post.title.toLowerCase().includes(searchValue.toLowerCase())
                );
                setPosts(filteredPosts);
            }else{
                setPosts(postsData.products);
            }
            setIsLoading(false);
        }
        getPosts();
    }, [searchValue]);

    const handelSearchProduct = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <section className="posts-page">
            <h1 className="title-section">Posts</h1>
                <input type="text" placeholder="Search . . ." className="search-product" onKeyUp={handelSearchProduct} />
                <Suspense fallback={<p>Loading Posts...</p>}>
                    {isLoading && posts.length == 0 ? <p>Loading Posts...</p> : <div className="posts">
                        {posts.length != 0 ? posts.map((post) => {
                            const linkPost = `/posts/${post.id}`;
                            return (
                                <Link href={linkPost}>
                                    <Post
                                        key={post.id}
                                        img={post.thumbnail}
                                        title={post.title}
                                        description={post.description}
                                    />
                                </Link>
                            );
                        }) : <p>Not Found Product</p>}
                    </div>}
                </Suspense>
        </section>
    );
}
