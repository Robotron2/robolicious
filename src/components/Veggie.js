import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"
import SwiperCore, { Autoplay } from "swiper"

import "swiper/css"
import "swiper/css/free-mode"

import CardComponent from "./Card"

SwiperCore.use([Autoplay])

const Veggie = () => {
	const [veggie, setVeggie] = useState([])

	const getVeggie = async () => {
		const check = localStorage.getItem("veggies")

		if (check) {
			setVeggie(JSON.parse(check))
		} else {
			const url = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
			const urlData = await url.json()
			localStorage.setItem("veggies", JSON.stringify(urlData.recipes))
			setVeggie(urlData.recipes)
			console.log(urlData)
		}
	}

	useEffect(() => {
		getVeggie()
	}, [])

	return (
		<div className="mb-5">
			<h3 className="text-center mb-2">Vegetarian Picks</h3>
			<div className="container py-4 px-4 justify-content-center myPopular">
				<Swiper
					autoplay={{
						delay: 2500,
						disableOnInteraction: false
					}}
					freeMode={true}
					grabCursor={true}
					modules={[FreeMode, Autoplay]}
					className="mySwiper"
					slidesPerView={5}
					spaceBetween={10}
					breakpoints={{
						960: {
							slidesPerView: 4,
							spaceBetween: 8
						},
						720: {
							slidesPerView: 3,
							spaceBetween: 6
						},
						540: {
							slidesPerView: 2,
							spaceBetween: 4
						},
						220: {
							slidesPerView: 1,
							spaceBetween: 2
						}
					}}
				>
					{veggie.map((recipe) => {
						return (
							<SwiperSlide key={recipe.id}>
								<Link to={`recipe/${recipe.id}`}>
									<CardComponent image={recipe.image} title={recipe.title} />
								</Link>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}

// const Wrapper = styled.div`
// 	margin: 4rem 0rem;
// `

// const Card = styled.div`
// 	min-height: 25rem;
// 	border-radius: 2rem;
// 	overflow: hidden;
// 	position: relative;

// 	img {
// 		border-radius: 2rem;
// 		position: absolute;
// 		left: 0;
// 		width: 100%;
// 		height: 100%;
// 		object-fit: cover;
// 	}

// 	p {
// 		position: absolute;
// 		z-index: 10;
// 		left: 50%;
// 		bottom: 0%;
// 		transform: translate(-50%, 0%);
// 		color: white;
// 		width: 100%;
// 		text-align: center;
// 		font-weight: 600;
// 		font-size: 1rem;
// 		height: 40%;
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;
// 	}
// `

// const Gradient = styled.div`
// 	position: absolute;
// 	z-index: 3;
// 	width: 100%;
// 	height: 100%;
// 	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
// `

export default Veggie
