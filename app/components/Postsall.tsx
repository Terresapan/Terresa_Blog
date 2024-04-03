import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Posts from "./Posts";
import { Session } from "inspector";

export default async function Postsall() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  return (
    <div
      id="blog"
      className="blog-post-cards-wrapper max-w-7xl mx-auto space-y-12"
    >
      <h1 className="heading">Featured Posts</h1>
      <div className="container max-w-7xl mx-auto px-4">
        <Posts posts={posts} />
      </div>
    </div>
  );
}
