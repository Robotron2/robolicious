import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { FreeMode } from "swiper"

import "swiper/css"
import "swiper/css/free-mode"
import CardComponent from "./Card"

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
		<div className="container py-4 px-4 justify-content-center bg-dark">
			<Swiper freeMode={true} grabCursor={true} modules={[FreeMode]} className="mySwiper" slidesPerView={5} spaceBetween={30}>
				<SwiperSlide>
					<CardComponent
						data={{
							imgSrc: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F36%2F123536-050-95CB0C6E%2FVariety-fruits-vegetables.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Ffood&tbnid=rMZ8I5b2kc3W3M&vet=12ahUKEwi_wYPq_pf8AhVCuUwKHT2QDKYQMygBegUIARDfAQ..i&docid=DJp6ra_owrcaaM&w=1600&h=1068&q=food&ved=2ahUKEwi_wYPq_pf8AhVCuUwKHT2QDKYQMygBegUIARDfAQ",
							title: "Theo"
						}}
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Popular
