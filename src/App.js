// import "./App.css"
import "./index.css"
// import Category from "./components/Category"
import Pages from "./pages/Pages"
import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
// import Search from "./components/Search"
// import Header from "./components/Header"
// import { AnimatePresence } from "framer-motion"
// import Home from "./pages/Home"
// import Cuisine from "./pages/Cuisine"
// import SearchedPage from "./pages/Searched"
// import Recipe from "./pages/Recipe"
// import MoreComponent from "./pages/More"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Pages />
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
