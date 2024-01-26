import React, {
	useState,
	useEffect
} from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import Preloader from "../src/components/Pre";
import ScrollToTop from "./components/ScrollToTop";

function App() {

	const [load, upadateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (

		<Router>
			<main>
				<aside>
					<Sidebar />
				</aside>
				<div className="main-content">
					<Navbar />
					<ScrollToTop />
					<Preloader load={load} />
					<Home />
					<Home />
					<Home />
					<div className="about" id={load ? "no-scroll" : "scroll"}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="*" element={<Navigate to="/" />} />
						</Routes>
					</div>
				</div>
			</main>
			<Footer />
		</Router>
	);
}

export default App;


