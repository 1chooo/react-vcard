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
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
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
				<Route
					path="/"
					element={
						<>
							<Preloader load={load} />
							<About />
							<Footer />
						</>
					} />
				{/* <Route
					path="/resume"
					element={
						<>
							<Resume />
							<Footer />
						</>
					} /> */}
				<Route
					path="/contact"
					element={
						<>
							<Preloader load={load} />
							<Contact />
							<Footer />
						</>
					} />
				<Route
					path="*"
					element={
						<Navigate
							to="/" />
					} />
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


