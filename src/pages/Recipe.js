/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

const Recipe = () => {
	const [details, setDetails] = useState({})
	const params = useParams()

	const fetchDetails = async () => {
		const data = await fetch(`https://api.spoonacular.com/recipes/${params.recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
		const detailData = await data.json()
		setDetails(detailData)
	}

	useEffect(() => {
		fetchDetails()
	}, [params.recipeId])

	return <div>{details.title}</div>
}

export default Recipe
