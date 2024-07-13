import React from 'react';
import { IPost } from '../../interface/iPost';


interface BlogPostListProps {
  posts: IPost[];
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts }) => {
  return (
    <ul className="blog-posts-list">
      {posts.map((post: IPost) => (
        <li key={post.id} className="blog-post-item active"
          data-category={post.category.toLowerCase()}
        >
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <figure className="blog-banner-box">
              <img src={post.imageUrl} alt={post.alt} loading="lazy" />
            </figure>
            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category">{post.category}</p>
                <span className="dot"></span>
                <time dateTime={post.date}>{post.date}</time>
              </div>
              {post.title}
              {post.content}
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BlogPostList;
