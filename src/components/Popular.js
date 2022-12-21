import { useEffect } from "react"

const Popular = () => {
	const getpopular = async () => {
		const url = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
		const urlData = await url.json()
		console.log(urlData)
	}

	useEffect(() => {
		getpopular()
	}, [])

	return <div>Popular</div>
}

export default Popular
