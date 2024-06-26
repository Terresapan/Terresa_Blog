import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { loadQuery } from "@/sanity/lib/store";
import { postsQuery, postQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Post from "@/app/components/Post";
import PostPreview from "@/app/components/PostPreview";

export const revalidate = 60;
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: QueryParams }) {
  const initial = await loadQuery<SanityDocument>(postQuery, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });
  if (!initial) {
    return { title: "Post not found" };
  }
  return {
    title: initial.data.title,
    description: initial.data.description,
  };
}

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(postsQuery);
  {
    next: {
      revalidate: 60;
    }
  }
  //console.log(posts);
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

const PostPage = async ({ params }: { params: QueryParams }) => {
  const initial = await loadQuery<SanityDocument>(postQuery, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });
  if (!initial) {
    return <div>Post not found!</div>;
  }
  //console.log(initial);
  return draftMode().isEnabled ? (
    <PostPreview initial={initial} params={params} />
  ) : (
    <Post post={initial.data} />
  );
};

export default PostPage;
