import Popular from "../components/Popular"

import Veggie from "../components/Veggie"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Search from "../components/Search"
import Category from "../components/Category"
import { useState } from "react"
import { useEffect } from "react"

const Home = () => {
	const [isDefined, setIsDefined] = useState(true)

	const checkLocal = async () => {
		const found = localStorage.getItem("veggies")
		if (found === "undefined") {
			setIsDefined(true)
			console.log("Trueeee")
		} else {
			setIsDefined(false)
			console.log("Falseeeee")
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

			{isDefined && <div>Hello</div>}

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
