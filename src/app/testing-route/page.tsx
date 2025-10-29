'use client';

import React, { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function TestingRoute() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-md shadow-md p-4">
            <h2 className="text-lg font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.body}</p>
            <p className="text-gray-500">User ID: {post.userId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
