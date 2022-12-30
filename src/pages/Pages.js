import Home from "./Home"
import { Route, Routes, useLocation } from "react-router-dom"
import Cuisine from "./Cuisine"
import SearchedPage from "./Searched"
import Recipe from "./Recipe"

import { AnimatePresence } from "framer-motion"
import Contact from "./Contact"

const Pages = () => {
	const location = useLocation()

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/cuisine/:type" element={<Cuisine />} />
				<Route path="/searched/:searchInput" element={<SearchedPage />} />
				<Route path="/recipe/:recipeId" element={<Recipe />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</AnimatePresence>
	)
}

export default Pages
