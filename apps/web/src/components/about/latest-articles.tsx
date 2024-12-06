"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MarkdownRenderer from "@/components/markdown/markdown-renderer";
import { sendGTMEvent } from "@/components/google";
import { LuEye } from "react-icons/lu";
import { ArrowRightIcon } from "@primer/octicons-react";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

import "@/styles/about/latest-posts.css";

type Post = {
  slug: string;
  metadata: {
    banner: string;
    alt?: string;
    title: string;
    category?: string;
    publishedAt: string;
  };
};

const handleSeeMorePostsClick = () => {
  console.log("See More Posts button clicked!");
  // TODO: customize button onclick effect https://articles.readytowork.jp/google-analytics-in-next-js-a26cc2b28db5
  sendGTMEvent({
    event: 'seeMorePostsClicked',
    value: 'GTM-PDJ3NF4Q'
  })
};


const LatestArticles = ({ posts }: { posts: Post[] }) => {
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);

  useEffect(() => {
    const updateVisiblePosts = () => {
      const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
      setVisiblePosts(isMobile ? posts.slice(0, 2) : posts.slice(0, 3));
    };

    updateVisiblePosts();
    window.addEventListener("resize", updateVisiblePosts);
    return () => window.removeEventListener("resize", updateVisiblePosts);
  }, [posts]);

  return (
    <section>
      <ul className="latest-post-list">
        {visiblePosts.map((post) => (
          <li
            key={post.slug}
            className="latest-post-item group active"
            data-category={post.metadata.category}
          >
            <Link href={`/blog/${post.slug}`} rel="noopener noreferrer">
              <figure className="latest-post-img">
                <div className="latest-post-item-icon-box">
                  <LuEye />
                </div>
                <Image
                  src={post.metadata.banner}
                  alt={post.metadata.alt || "Blog post image"}
                  width={1600}
                  height={900}
                  priority
                  quality={50}
                  placeholder="empty"
                  loading="eager"
                />
              </figure>
              <h3 className="ml-[10px] text-white-2 text-base font-normal capitalize leading-[1.3] group-hover:text-orange-yellow-crayola group-hover:font-bold">
                <MarkdownRenderer content={post.metadata.title} />
              </h3>
            </Link>
          </li>
        ))}
      </ul>
      <div className="z-10 flex  items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <Link href="/post">
              <span>✨ See More Posts</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 relative top-[-2px]" />
            </Link>
          </AnimatedShinyText>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
