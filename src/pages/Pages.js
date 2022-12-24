import Home from "./Home"
import { Route, Routes } from "react-router-dom"
import Cuisine from "./Cuisine"

const Pages = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cuisine" element={<Cuisine />} />
		</Routes>
	)
}

export default Pages
