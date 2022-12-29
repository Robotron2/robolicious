import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"

const SearchedPage = () => {
	const [searchedRecipes, setSearchedRecipes] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	let params = useParams()

	const getSearchData = async (name) => {
		const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
		const recipes = await data.json()
		setSearchedRecipes(recipes.results)
		setIsLoading(false)
	}

	useEffect(() => {
		getSearchData(params.searchInput)
	}, [params.searchInput])

	return (
		<div className="container">
			{isLoading && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					style={{ margin: "auto", background: "inherit", display: "block", shapeRendering: "auto" }}
					width="200px"
					height="200px"
					viewBox="0 0 100 100"
					preserveAspectRatio="xMidYMid"
				>
					<circle cx="50" cy="50" r="32" strokeWidth="1" stroke="#fe718d" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
						<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
					</circle>
				</svg>
			)}
			{!isLoading && (
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
			)}
		</div>
	)
}

export default SearchedPage
