"use client";

import { useEffect, useState } from "react";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/posts")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setPosts(data);
        });
    },[]);

    return <div>
    <h1>글 목록</h1>
    <ul>
        {posts.map((post: {id: number, title: string}) => {
            return <li key={post.id}>ID: {post.id}, Title: {post.title}</li>
        })}
    </ul>
    </div>;
}