import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import NavBar from "../../components/Navbar";
import Sidebar from "../../components/SideBar/SideBar";
import FilterList from '../../components/blog/FilterList';
import FilterSelectBox from '../../components/blog/FilterSelectBox';
import BlogPostList from '../../components/blog/BlogPostList';
import Pagination from '../../components/blog/Pagination';
import Header from "../../components/Header";

import { postsData } from '../../config/BlogData';
import { IPost } from "../../interface/iPost";


import { filterCategory, handleItemClick } from '../../utils/filterUtils';
import { initializeCustomSelect, filterItemsByCategory } from "../../utils/domUtils";

const Blog: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    initializeCustomSelect(filterItemsByCategory);
    handleItemClick('All', setSelectedValue);
    document.title = "Blog - Hugo ChunHo Lin (1chooo) | Portfolio";
  }, []);

  const [selectedValue, setSelectedValue] = useState('All');
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const filteredPosts = filterCategory(selectedValue, postsData);

  // Calculate the current posts to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <article
          className={`blog ${location.pathname === '/blog' ? 'active' : ''}`}
          data-page="blog"
        >
          <Header title="Hugo's Blog" />
          <section className="blog-posts">
            <FilterList
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              setCurrentPage={setCurrentPage}
            />
            <FilterSelectBox
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              isSelectActive={isSelectActive}
              setIsSelectActive={setIsSelectActive}
              setCurrentPage={setCurrentPage}
            />
            <BlogPostList posts={currentPosts as IPost[]} />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </section>
        </article>
      </div>
    </main>
  );
}

export default Blog;
