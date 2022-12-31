import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Search from "../components/Search"
import Category from "../components/Category"
import Loading from "../components/Loading"

const SearchedPage = () => {
	const [searchedRecipes, setSearchedRecipes] = useState([])
	const [checkRecipes, setCheckRecipes] = useState()
	const [apiLimit, setApiLimit] = useState(true)
	const [isLoading, setIsLoading] = useState(true)
	let params = useParams()

	const getSearchData = (name) => {
		fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
			// .then(async (result) => {
			// const recipes = await result.json()
			// if (recipes.results.length === 0) {
			// 	setCheckRecipes(0)
			// } else {
			// 	setSearchedRecipes(recipes.results)
			// 	setIsLoading(false)
			// }
			// })
			// .catch((err) => {
			// 	console.log(err)
			// })
			.then((res) => {
				console.log(res)
				// eslint-disable-next-line eqeqeq
				if (res.status == 402) {
					console.log("API key limit reached. Try again tomorrow")
					setApiLimit(false)
				}
				return res.json()
			})
			.then((data) => {
				const recipes = data
				console.log(recipes)
				if (recipes.results.length === 0) {
					setCheckRecipes(0)
				} else {
					setSearchedRecipes(recipes.results)
					setIsLoading(false)
				}
			})
	}
	// getSearchData("African")

	useEffect(() => {
		getSearchData(params.searchInput)
	}, [params.searchInput])

	return (
		<div>
			<Header />
			<Search />
			<Category />

			{!apiLimit && (
				<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
					<Loading />
					<center>
						<h3>
							API limit might have been reached, try again tomorrow if you think it is not a network issue.{" "}
							<p>
								<small>Sorry for the inconvenience.</small>
							</p>
						</h3>
					</center>
				</motion.div>
			)}

			{isLoading && checkRecipes === 0 && (
				<div>
					<center>
						<h3>Hello what you are looking for is not in our archives. Check your spelling or type in English.</h3>
					</center>
				</div>
			)}
			{isLoading && checkRecipes !== 0 && apiLimit && <Loading />}
			{!isLoading && checkRecipes !== 0 && apiLimit && (
				<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="container-fluid">
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
