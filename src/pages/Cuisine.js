import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import { motion } from "framer-motion"
import Header from "../components/Header"
import Search from "../components/Search"
import Category from "../components/Category"
import Loading from "../components/Loading"

const Cuisine = () => {
	const [cuisine, setCuisine] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [apiLimit, setApiLimit] = useState(true)
	let params = useParams()

	const getCuisine = async (name) => {
		await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
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
				setCuisine(recipes.results)
				setIsLoading(false)
			})
	}

	useEffect(() => {
		getCuisine(params.type)
		// console.log(params.type)
	}, [params.type])

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

			{isLoading && apiLimit && <Loading />}
			{!isLoading && apiLimit && (
				<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="container-fluid">
					<ul className="ulCards">
						{cuisine.map((item) => {
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

// const Card = styled.div`
// 	justify-content: center;
// 	align-item: center;
// 	img {
// 		width: 100%;
// 		border-radius: 2rem;
// 	}
// 	a {
// 		text-decoration: none;
// 	}
// 	h4 {
// 		text-align: center;
// 		padding: 1rem;
// 	}
// `

export default Cuisine
