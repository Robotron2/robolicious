import Home from "./Home"
import { Route, Routes } from "react-router-dom"
import Cuisine from "./Cuisine"
import SearchedPage from "./Searched"
import Recipe from "./Recipe"

const Pages = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cuisine/:type" element={<Cuisine />} />
			<Route path="/searched/:searchInput" element={<SearchedPage />} />
			<Route path="/recipe/:recipeId" element={<Recipe />} />
		</Routes>
	)
}

export default Pages
