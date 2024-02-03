import Sidebar from "../SideBar/SideBar";
import NavBar from "../Navbar";

import {
  useLocation
} from 'react-router-dom';

const Portfolio = () => {

  const location = useLocation();
  
  return (
    <main>
      <Sidebar />
      <div className="main-content">

        <NavBar />

        <article
          className={`portfolio ${location.pathname === '/portfolio' ? 'active' : ''}`}
          data-page="portfolio"
        >
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>

        </article>

      </div>

    </main>
  );
}

export default Portfolio;
