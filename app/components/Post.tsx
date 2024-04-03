"use client";

import { RichText } from "@/app/components/RichText";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument }) => {
  return (
    <section className="container mx-auto prose prose-xl px-4 py-32 bg-LightSurface/50 dark:bg-DarkSurface/50">
      <h1 className="prose dark:prose-invert">{post.title}</h1>
      <p>{post.description}</p>
      {post?.mainImage ? (
        <Image
          className="w-full object-cover rounded-xl"
          src={builder.image(post.mainImage).width(684).height(512).url()}
          alt={post?.mainImage?.alt}
          width={684}
          height={512}
        />
      ) : null}
      <div className="prose dark:prose-invert">
        {post?.body ? (
          <PortableText value={post.body} components={RichText} />
        ) : null}
      </div>
    </section>
  );
};

export default Post;
