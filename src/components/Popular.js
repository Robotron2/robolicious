import { useEffect, useState } from "react"
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { Link } from "react-router-dom"

const Popular = () => {
	const [popular, setPopular] = useState([])

	const getpopular = async () => {
		const check = localStorage.getItem("popular")

		if (check) {
			setPopular(JSON.parse(check))
		} else {
			const url = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
			const urlData = await url.json()
			localStorage.setItem("popular", JSON.stringify(urlData.recipes))
			setPopular(urlData.recipes)
			console.log(urlData)
		}
	}

	useEffect(() => {
		getpopular()
	}, [])

	return (
		<div className="container mt-2 ">
			<h3>Popular Picks</h3>
			<div className="row popular">
				{popular.map((recipe) => {
					return (
						<div className="popular-box text-center" key={recipe.id}>
							<img src={recipe.image} alt="" />
							<h6>{recipe.title}</h6>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Popular
