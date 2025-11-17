import BlogPost from "@/types/blogpost";
import Link from "next/link";

export default async function BlogPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: BlogPost[] = await data.json();
  return (
    <ul>
      {posts.map((post: BlogPost) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
