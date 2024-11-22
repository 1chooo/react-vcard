"use client";

import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonBlogLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);


  return loading ? (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <ul className="blog-posts-list">
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index} className="blog-post-item skeleton">
            <Skeleton height={200} className="blog-banner-skeleton" />
            <div className="blog-content-skeleton">
              <Skeleton height={24} className="blog-title-skeleton" />
              <Skeleton count={3} className="blog-summary-skeleton" />
            </div>
          </li>
        ))}
      </ul>
    </SkeletonTheme>
  ) : (
    <>{children}</>
  );
};

export default SkeletonBlogLoader;
