import { RichText } from "@/app/components/RichText";
import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { dataset, projectId } from "@/sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });

const Post = ({ post }: { post: SanityDocument }) => {
  const { title, mainImage, body } = post;
  return (
    <section className="container mx-auto prose prose-xl px-4 py-32 bg-LightSurface/50 dark:bg-DarkSurface/50">
      {title ? <h1 className="prose dark:prose-invert">{title}</h1> : null}
      {mainImage ? (
        <Image
          className="w-full object-cover rounded-xl"
          src={builder.image(mainImage).width(684).height(512).url()}
          alt={mainImage.alt || ""}
          width={684}
          height={512}
        />
      ) : null}
      <div className="prose dark:prose-invert">
        {body ? <PortableText value={body} components={RichText} /> : null}
      </div>
    </section>
  );
};

export default Post;
