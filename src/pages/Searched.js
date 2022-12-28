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

	// return (
	// 	<div className="grid-class">
	// 		{searchedRecipes.map((item) => {
	// 			return (
	// 				<Card key={item.id}>
	// <Link to={`recipe/${item.id}`}>
	// 	<img src={item.image} alt={item.title} />
	// 	<h4>{item.title}</h4>
	// </Link>
	// 				</Card>
	// 			)
	// 		})}
	// 	</div>
	// )
	// return (
	// 	<div className="container mt-2 ">
	// 		<div className="row cuisine-search">
	// 			{searchedRecipes.map((item) => {
	// 				return (
	// 					<Link to={`recipe/${item.id}`}>
	// 						<img src={item.image} alt={item.title} />
	// 						<h4>{item.title}</h4>
	// 					</Link>
	// 				)
	// 			})}
	// 		</div>
	// 	</div>
	// )

	return (
		<ul class="ulCards">
			{searchedRecipes.map((item) => {
				return (
					<li>
						<Link to={`recipe/${item.id}`} className="liCard">
							<img src={item.image} class="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">{item.title}</h3>
									</div>
								</div>
							</div>
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

// const Card = styled.div`
// 	justify-content: center;
// 	align-item: center;
// 	img {
// 		width: 100%;
// 		border-radius: 2rem;
// 	}
// 	a {
// 		text-decoration: none;
// 	}
// 	h4 {
// 		text-align: center;
// 		padding: 1rem;
// 	}
// `

export default SearchedPage
