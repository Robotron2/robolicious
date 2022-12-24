import styled from "styled-components"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

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
		console.log(params.type)
	}, [params.type])

	return (
		<div className="grid-class">
			{cuisine.map((item) => {
				return (
					<Card key={item.id}>
						<img src={item.image} alt={item.title} />
						<h4>{item.title}</h4>
					</Card>
				)
			})}
		</div>
	)
}

const Card = styled.div`
	justify-content: center;
	align-item: center;
	img {
		width: 100%;
		border-radius: 2rem;
	}
	a {
		text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 1rem;
	}
`

export default Cuisine
