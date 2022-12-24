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
			const url = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
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
		<div>
			<Wrapper>
				<h3>Popular Picks</h3>

				<Splide
					options={{
						perPage: 4,
						arrows: false,
						pagination: false,
						drag: "free",
						gap: "5rem"
					}}
				>
					{popular.map((recipe) => {
						return (
							<SplideSlide key={recipe.id}>
								<Card>
									<Link to={`recipe/${recipe.id}`}>
										<p>{recipe.title}</p>
										<img src={recipe.image} alt={recipe.title} />
										<Gradient />
									</Link>
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
	position: relative;

	img {
		border-radius: 2rem;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	p {
		position: absolute;
		z-index: 10;
		left: 50%;
		bottom: 0%;
		transform: translate(-50%, 0%);
		color: white;
		width: 100%;
		text-align: center;
		font-weight: 600;
		font-size: 1rem;
		height: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const Gradient = styled.div`
	position: absolute;
	z-index: 3;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Popular
