/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"

const Recipe = () => {
	const [details, setDetails] = useState({})
	const [activeTab, setActiveTab] = useState("instructions")
	const [isLoading, setIsLoading] = useState(false)
	const params = useParams()

	const fetchDetails = async () => {
		const data = await fetch(`https://api.spoonacular.com/recipes/${params.recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
		const detailData = await data.json()
		setDetails(detailData)
		setIsLoading(true)
	}

	useEffect(() => {
		fetchDetails()
	}, [params.recipeId])

	return (
		<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="container mt-5 ">
			<div className="recipe-container">
				<div className="container">
					<h3>{details.title}</h3>
					<img src={details.image} alt="" className="mb-3" />
					<div className="container btn-container">
						<button className={activeTab === "instructions" ? "active btn btn-dark recipe-btn m-4" : " btn btn-outline-dark m-4"} onClick={() => setActiveTab("instructions")}>
							Instructions
						</button>
						<button className={activeTab === "ingredients" ? "active  btn btn-danger recipe-btn m-4" : " btn btn-outline-danger m-4"} onClick={() => setActiveTab("ingredients")}>
							Ingredients
						</button>
					</div>
				</div>
				<div className="container pt-5 body">
					{activeTab === "instructions" && (
						<div>
							<p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
							<p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
						</div>
					)}
					{activeTab === "ingredients" && (
						<ul className="pt-5">
							{details.extendedIngredients.map((ingredient) => {
								return <li key={ingredient.id}>{ingredient.original}</li>
							})}
						</ul>
					)}
				</div>
			</div>
		</motion.div>
	)
}

export default Recipe
