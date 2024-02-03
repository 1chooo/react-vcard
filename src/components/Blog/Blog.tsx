import Sidebar from "../SideBar/SideBar";
import NavBar from "../Navbar";

import {
  useLocation
} from 'react-router-dom';

const Blog = () => {

  const location = useLocation();

  return (
    <main>
      <Sidebar />
      <div className="main-content">

        <NavBar />

        <article
          className={`blog ${location.pathname === '/blog' ? 'active' : ''}`}
          data-page="blog"
        >
          <header>
            <h2 className="h2 article-title">Blog</h2>
          </header>

        </article>

      </div>

    </main>
  );
}

export default Blog;