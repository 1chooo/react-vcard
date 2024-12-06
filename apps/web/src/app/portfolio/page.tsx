import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import FilterSelectBox from "@/components/portfolio/filter-select-box";
import FilterList from "@/components/portfolio/filter-list";
import MarkdownRenderer from "@/components/markdown/markdown-renderer";
import Pagination from "@/components/pagination";
import { getPortfolioPosts } from "@/lib/db/portfolio";
import config from "@/config";
import { LuEye } from "react-icons/lu";

const { title } = config;
const POSTS_PER_PAGE = 9;

export const metadata = {
  title: `Portfolio | ${title}`,
  description: "Read my thoughts on software development, design, and more.",
};

type tParams = Promise<{ tag?: string; page?: string }>;

export default async function Portfolio({ searchParams }: { searchParams: tParams }) {
  const { tag = "All", page = "1" } = await searchParams;

  const allPortfolioPosts = await getPortfolioPosts();
  const blogTags = [
    "All",
    ...Array.from(
      new Set(allPortfolioPosts.map((post) => post.metadata.category ?? ""))
    ),
  ];
  const selectedTag = tag;
  const currentPage = parseInt(page, 10);

  // Filter blogs based on the selected tag
  const filteredPortfolioPosts =
    selectedTag === "All"
      ? allPortfolioPosts
      : allPortfolioPosts.filter((post) => post.metadata.category === selectedTag);

  // Sort blogs by date
  const sortedPortfolioPosts = filteredPortfolioPosts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  // Calculate total pages
  const totalPages = Math.ceil(sortedPortfolioPosts.length / POSTS_PER_PAGE);

  // Get blogs for current page
  const paginatedPortfolioPosts = sortedPortfolioPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <article>
      <PageHeader header="Hugo's Portfolio" />
      <section className="projects">
        <FilterList selectedTag={selectedTag} blogTags={blogTags} />
        <FilterSelectBox selectedTag={selectedTag} blogTags={blogTags} />
        <ul className="project-list">
          {paginatedPortfolioPosts.map((post, index) => (
            <li
              key={post.slug} // Avoid using index for keys
              className="project-item active"
              data-category={post.metadata.category}
            >
              <Link href={`/portfolio/${post.slug}`} rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <LuEye />
                  </div>
                  <Image
                    src={post.metadata.banner}
                    alt={post.metadata.alt || "Portfolio post image"}
                    width={1600}
                    height={900}
                    priority={true}
                    placeholder="blur"
                    loading="eager"
                    blurDataURL="https://docs.1chooo.com/images/cover-with-1chooo-com.png"
                  />
                </figure>
                <h3 className="project-title"><MarkdownRenderer content={post.metadata.title} /></h3>
                <p className="project-category">{post.metadata.category}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          selectedTag={selectedTag}
          basePath="/portfolio"
        />
      </section>
    </article>
  );
}
