import Home from "./Home"
import { Route, Routes } from "react-router-dom"
import Cuisine from "./Cuisine"
import SearchedPage from "./Searched"
import Recipe from "./Recipe"
import MoreComponent from "./More"

const Pages = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cuisine/:type" element={<Cuisine />} />
			<Route path="/searched/:searchInput" element={<SearchedPage />} />
			<Route path="/recipe/:recipeId" element={<Recipe />} />
			<Route path="/more" element={<MoreComponent />} />
		</Routes>
	)
}

export default Pages
