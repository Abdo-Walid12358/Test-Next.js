"use client";
import "./posts.css";
import Post from "../post/post";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getPosts() {
            setIsLoading(true);
            const res = await fetch(
                "https://dummyjson.com/products"
            );
            const postsData = await res.json();
            setPosts(postsData.products);
            setIsLoading(false);
        }
        getPosts();
    }, []);

    return (
        <section className="posts-page">
            <h1 className="title-section">Posts</h1>
                <Suspense fallback={<p>Loading Posts...</p>}>
                    {isLoading ? <p>Loading Posts...</p> : <div className="posts">
                        {posts.map((post) => {
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
                        })}
                    </div> }
                </Suspense>
        </section>
    );
}
