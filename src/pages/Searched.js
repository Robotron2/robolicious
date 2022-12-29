import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"

const SearchedPage = () => {
	const [searchedRecipes, setSearchedRecipes] = useState([])
	let params = useParams()

	const getSearchData = async (name) => {
		const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
		const recipes = await data.json()
		setSearchedRecipes(recipes.results)
	}

	useEffect(() => {
		getSearchData(params.searchInput)
	}, [params.searchInput])

	return (
		<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="container">
			<ul className="ulCards">
				{searchedRecipes.map((item) => {
					return (
						<Link to={`/recipe/${item.id}`} className="liCard" key={item.id}>
							<li>
								<img src={item.image} className="liCard-img" alt="" />
								<div className="liCard-overlay">
									<div className="liCard-header">
										<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
											<path />
										</svg>
										<div className="liCard-header-text">
											<h3 className="liCard-title">{item.title}</h3>
										</div>
									</div>
								</div>
							</li>
						</Link>
					)
				})}
			</ul>
		</motion.div>
	)
}

export default SearchedPage
