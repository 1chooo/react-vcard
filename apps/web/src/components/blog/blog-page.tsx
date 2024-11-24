"use client";

import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import FilterSelectBox from "@/components/blog/filter-select-box";
import FilterList from "@/components/blog/filter-list";
import MarkdownRenderer from "@/components/markdown/markdown-renderer";
import SkeletonBlogLoader from "@/components/skeleton-loader";

export default function BlogPage({
  paginatedBlogs,
  blogTags,
  selectedTag,
  currentPage,
  totalPages,
  searchParams,
}: {
  paginatedBlogs: any[];
  blogTags: string[];
  selectedTag: string;
  currentPage: number;
  totalPages: number;
  searchParams: { tag?: string; page?: string };
}) {
  return (
    <article>
      <PageHeader header="Hugo's Blog" />
      <section className="blog-posts">
        <FilterList selectedTag={selectedTag} blogTags={blogTags} />
        <FilterSelectBox selectedTag={selectedTag} blogTags={blogTags} />
        <SkeletonBlogLoader>
          <ul className="blog-posts-list">
            {paginatedBlogs.map((post, index) => (
              <li
                key={index}
                className="blog-post-item active"
                data-category={post.metadata.category}
              >
                <Link href={`/blog/${post.slug}`} rel="noopener noreferrer">
                  <figure className="blog-banner-box">
                    <Image
                      src={post.metadata.banner}
                      alt={post.metadata.alt || "Blog post image"}
                      width={1600}
                      height={900}
                      priority={true}
                      placeholder="empty"
                      loading="eager"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">{post.metadata.category}</p>
                      <span className="dot"></span>
                      <time dateTime={post.metadata.publishedAt}>
                        {new Date(post.metadata.publishedAt).toLocaleDateString(
                          "en-us",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </time>
                    </div>
                    <h3 className="h3 blog-item-title">
                      <MarkdownRenderer content={post.metadata.title} />
                    </h3>
                    <MarkdownRenderer
                      className="blog-summary"
                      content={post.metadata.summary}
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </SkeletonBlogLoader>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <Link
                key={pageNum}
                href={{
                  pathname: "/blog",
                  query: { ...searchParams, page: pageNum.toString() },
                }}
                className={`pagination-btn ${pageNum === currentPage ? "active" : ""
                  }`}
              >
                {pageNum}
              </Link>
            )
          )}
        </div>
      </section>
    </article>
  );
}
