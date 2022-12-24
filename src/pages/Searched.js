import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

const SearchedPage = () => {
	const [searchedRecipes, setSearchedRecipes] = useState([])
	const params = useParams()

	const getSearchData = async (name) => {
		const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
		const recipes = await data.json()
		setSearchedRecipes(recipes.results)
	}

	useEffect(() => {
		getSearchData(params.searchInput)
	}, [params.searchInput])

	return <div></div>
}

export default SearchedPage
