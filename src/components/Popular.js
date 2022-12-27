import React from "react"
import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"

import "swiper/css"
import "swiper/css/free-mode"

// import "bootstrap/dist/css/bootstrap.min.css"
import CardComponent from "./Card"

// import { title } from "process"

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
			<h3 className="text-center mb-2">Popular Picks</h3>
			<div className="container py-4 px-4 justify-content-center myPopular">
				<Swiper
					freeMode={true}
					grabCursor={true}
					modules={[FreeMode]}
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
					{popular.map((recipe) => {
						return (
							<SwiperSlide>
								<CardComponent image={recipe.image} title={recipe.title} />
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}

export default Popular
