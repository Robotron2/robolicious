import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import { motion } from "framer-motion"

const Cuisine = () => {
	const [cuisine, setCuisine] = useState([])
	let params = useParams()

	const getCuisine = async (name) => {
		const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
		const recipes = await data.json()
		setCuisine(recipes.results)
	}

	useEffect(() => {
		getCuisine(params.type)
		// console.log(params.type)
	}, [params.type])

	// return (
	// 	<div className="grid-class">
	// 		{cuisine.map((item) => {
	// 			return (
	// 				<Card key={item.id}>
	// 					<img src={item.image} alt={item.title} />
	// 					<h4>{item.title}</h4>
	// 				</Card>
	// 			)
	// 		})}
	// 	</div>
	// )
	return (
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
