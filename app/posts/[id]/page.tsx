import type { Metadata } from "next";
import BlogPost from "@/types/blogpost";
import LikeButton from "./likeButton";

type PageParams = {
  id: string;
};

// Helper-Function for ONE post
async function getPost(id: string): Promise<BlogPost | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    return null;
  }

  const post: BlogPost = await response.json();
  return post;
}

type PageProps = {
  params: Promise<PageParams>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post ? post.title : "Post Not Found",
  };
}

export default async function Post({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  );
}
