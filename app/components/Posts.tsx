import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {posts.map((post) => (
        <Link className="card" key={post._id} href={post.slug.current}>
          <div className="md:w-full">
            {post?.mainImage && (
              <Image
                className="w-full object-fill rounded-lg"
                src={post.imageURL}
                alt={post.mainImage.alt}
                width={360}
                height={240}
                priority
              />
            )}
            <div className="p-4">
              {/*<div className="bg-LightPrimary dark:bg-DarkPrimary text-LightOnPrimary dark:text-DarkOnPrimary px-2 py-1 rounded-md inline-block mb-4"><span>{post.categories}</span></div>*/}
              <h2 className="text-textOnLightVariant dark:text-textOnDark text-2xl font-semibold font-['Work Sans'] mb-2">
                {post.title}
              </h2>
              <p className="text-textOnLightVariant/70 dark:text-textOnDark/70 text-base font-normal font-['Work Sans'] leading-normal mb-2">
                {convertDate(post._createdAt)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
