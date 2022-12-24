import { useParams } from "react-router-dom"

const Recipe = () => {
	const params = useParams()

	const fetchDetails = async () => {
		const data = await fetch(`https://api.spoonacular.com/recipes/${params.recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
	}

	return <div>Recipe</div>
}

export default Recipe
