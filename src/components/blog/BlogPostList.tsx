import React from 'react';
import { Post } from '../../config/BlogData';

interface BlogPostListProps {
  posts: Post[];
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts }) => {
  return (
    <ul className="blog-posts-list">
      {posts.map((post: Post, index: number) => (
        <li
          key={index}
          className="blog-post-item active"
          data-category={post.category.toLowerCase()}
        >
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="blog-banner-box">
              <img
                src={post.imageUrl}
                alt={post.alt}
                loading="lazy"
              />
            </figure>
            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category">{post.category}</p>
                <span className="dot"></span>
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.content}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BlogPostList;
