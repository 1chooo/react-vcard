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
import About from "./components/About/About";
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
			<Routes>
				<Route path="/" element={
					<>
						<About />
						<Footer />
					</>
				} />
				<Route path="/test" element={
					<>
						<About />
						<Footer />
					</>
				} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
		// <Router>
		// 		<div className="main-content">
		// 			{/* <Navbar />
		// 			<ScrollToTop />
		// 			<Preloader load={load} />
		// 			<About /> */}
		// 			<div className="" id={load ? "no-scroll" : "scroll"}>
		// 				<Routes>
		// 					<Route path="/" element={<About />} />
		// 					<Route path="*" element={<Navigate to="/" />} />
		// 				</Routes>
		// 			</div>
		// 		</div>
		// 	<Footer />
		// </Router>
	);
}

export default App;


