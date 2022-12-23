import { useEffect, useState } from "react"

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
			Popular
			{popular.map((recipe) => {
				return (
					<div key={recipe.id}>
						<p>{recipe.title + " title"}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Popular
