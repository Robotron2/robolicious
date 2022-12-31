import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, FreeMode } from "swiper"
import "swiper/css"
import "swiper/css/free-mode"

import CardComponent from "./Card"

SwiperCore.use([Autoplay])

// import { title } from "process"

const Popular = () => {
	const [popular, setPopular] = useState([])

	const getpopular = async () => {
		const check = localStorage.getItem("popular")

		if (check) {
			setPopular(JSON.parse(check))
		} else {
			const url = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`)
			const urlData = await url.json()
			localStorage.setItem("popular", JSON.stringify(urlData.recipes))
			setPopular(urlData.recipes)
				.then((res) => {
					return res.json()
				})
				.then((data) => {
					const urlData = data
					localStorage.setItem("popular", JSON.stringify(urlData.recipes))
					setPopular(urlData.recipes)
				})
		}
	}

	useEffect(() => {
		getpopular()
	}, [])

	return (
		<div>
			<h3 className="text-center mb-2">Popular Picks</h3>
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
							slidesPerView: 3,
							spaceBetween: 8
						},
						720: {
							slidesPerView: 2,
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
					{popular.map((recipe) => {
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

export default Popular
