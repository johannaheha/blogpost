import { Suspense } from "react";
import BlogPosts from "./BlogPosts";


export default async function Post() {
  return (
    <>
      <h1>Blog Posts</h1>
      <Suspense fallback={<p>Loading posts...</p>}>
        <BlogPosts />
      </Suspense>
    </>
  );
}
