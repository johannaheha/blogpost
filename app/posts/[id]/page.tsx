import BlogPost from "@/types/blogpost";
import { Metadata } from "next";

type Pageparams = {
  id: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Pageparams>;
}): Promise<Metadata> {
  const { id } = await params;

  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  const loadedpost = posts.find((post: BlogPost) => post.id === +id);

  return {
    title: loadedpost ? loadedpost.title : "Post Not Found",
  };
}

export default async function Post({
  params,
}: {
  params: Promise<Pageparams>;
}) {
  const { id } = await params;

  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  const loadedpost = posts.find((post: BlogPost) => post.id == +id);

  if (!loadedpost) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <article>
      <h1>{loadedpost.title}</h1>
      <p>{loadedpost.body}</p>
    </article>
  );
}
