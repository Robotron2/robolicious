import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

const SearchedPage = () => {
	const [searchedRecipes, setSearchedRecipes] = useState([])
	let params = useParams()

	const getSearchData = async (name) => {
		const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
		const recipes = await data.json()
		setSearchedRecipes(recipes.results)
	}

	useEffect(() => {
		getSearchData(params.searchInput)
	}, [params.searchInput])

	return (
		<div className="grid-class">
			{searchedRecipes.map((item) => {
				return (
					<Card key={item.id}>
						<Link to={`recipe/${item.id}`}>
							<img src={item.image} alt={item.title} />
							<h4>{item.title}</h4>
						</Link>
					</Card>
				)
			})}
		</div>
	)
}

const Card = styled.div`
	justify-content: center;
	align-item: center;
	img {
		width: 100%;
		border-radius: 2rem;
	}
	a {
		text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 1rem;
	}
`

export default SearchedPage
