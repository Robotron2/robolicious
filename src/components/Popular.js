import { useEffect, useState } from "react"
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

const Popular = () => {
	const [popular, setPopular] = useState([])

	const getpopular = async () => {
		const url = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
		const urlData = await url.json()
		console.log(urlData)
		setPopular(urlData.recipes)
	}

	useEffect(() => {
		getpopular()
	}, [])

	return (
		<div>
			<Wrapper>
				<h3>Popular Picks</h3>

				<Splide>
					{popular.map((recipe) => {
						return (
							<SplideSlide key={recipe.id}>
								<Card>
									<p>{recipe.title}</p>
									<img src={recipe.image} alt={recipe.title} />
								</Card>
							</SplideSlide>
						)
					})}
				</Splide>
			</Wrapper>
		</div>
	)
}

const Wrapper = styled.div`
	margin: 4rem 0rem;
`

const Card = styled.div`
	min-height: 25rem;
	border-radius: 2rem;
	overflow: hidden;

	img {
		border-radius: 2rem;
	}
`

export default Popular
