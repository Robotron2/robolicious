/* eslint-disable eqeqeq */
import Popular from "../components/Popular"

import Veggie from "../components/Veggie"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Search from "../components/Search"
import Category from "../components/Category"
import { useState } from "react"
import { useEffect } from "react"
import Loading from "../components/Loading"

const Home = () => {
	const [isDefined, setIsDefined] = useState(true)

	const checkLocal = async () => {
		const foundVeggies = localStorage.getItem("veggies")
		const foundPopular = localStorage.getItem("popular")
		if (foundVeggies === "undefined" || foundPopular === "undefined") {
			setIsDefined(true)
			console.log("Trueeee")
		} //else {
		// 	setIsDefined(false)
		// 	console.log("Falseeeee")
		// }
		else if (foundVeggies && foundPopular) {
			setIsDefined(false)
		} else {
			await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`)
				.then((response) => {
					//check and return response
					// eslint-disable-next-line eqeqeq
					if (response == 402) {
						setIsDefined(true)
					}
					return response.json()
				})
				.then((urlData) => {
					console.log(urlData)
					console.log(urlData.recipes.length)
					console.log(typeof urlData.recipes.length)
					console.log(urlData.recipes.length === 12)
					if (urlData.recipes.length === 12) {
						setIsDefined(false)
					}
				})
		}
	}

	useEffect(() => {
		checkLocal()
	}, [])

	return (
		<div>
			<Header />
			<Search />
			<Category />

			{isDefined && (
				<div>
					<Loading />
				</div>
			)}

			{!isDefined && (
				<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
					<Popular />
					<Veggie />
				</motion.div>
			)}
		</div>
	)
}

export default Home
