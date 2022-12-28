/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const Recipe = () => {
	const [details, setDetails] = useState({})
	const [activeTab, setActiveTab] = useState("instructions")
	const params = useParams()

	const fetchDetails = async () => {
		const data = await fetch(`https://api.spoonacular.com/recipes/${params.recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
		const detailData = await data.json()
		setDetails(detailData)
	}

	useEffect(() => {
		fetchDetails()
	}, [params.recipeId])

	// return (
	// 	<DetailWrapper>
	// <div>
	// 	<h2>{details.title}</h2>
	// 	<img src={details.image} alt="" />
	// </div>
	// 		<Info>
	// <SButton className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>
	// 	Instructions
	// </SButton>
	// <SButton className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>
	// 	Ingredients
	// </SButton>

	// {activeTab === "instructions" && (
	// 	<div>
	// 		<h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
	// 		<h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
	// 	</div>
	// )}

	// {activeTab === "ingredients" && (
	// 	<ul>
	// 		{details.extendedIngredients.map((ingredient) => {
	// 			return <li key={ingredient.id}>{ingredient.original}</li>
	// 		})}
	// 	</ul>
	// )}
	// 		</Info>
	// 	</DetailWrapper>
	// )

	return (
		<div className="container mt-5 ">
			<div className="recipe-container">
				<div className="container">
					<h3>{details.title}</h3>
					<img src={details.image} alt="" className="mb-3" />
					<div className="container btn-container">
						<button className={activeTab === "instructions" ? "active btn btn-dark recipe-btn m-4" : " btn btn-outline-dark m-4"} onClick={() => setActiveTab("instructions")}>
							Instructions
						</button>
						<button className={activeTab === "ingredients" ? "active  btn btn-danger recipe-btn m-4" : " btn btn-outline-danger m-4"} onClick={() => setActiveTab("ingredients")}>
							Ingredients
						</button>
					</div>
				</div>
				<div className="container pt-5 body">
					{activeTab === "instructions" && (
						<div>
							<p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
							<p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
						</div>
					)}
					{activeTab === "ingredients" && (
						<ul className="pt-5">
							{details.extendedIngredients.map((ingredient) => {
								return <li key={ingredient.id}>{ingredient.original}</li>
							})}
						</ul>
					)}
				</div>
			</div>
		</div>
	)
}

const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;
	.active {
		background: linear-gradient(35deg, #494949, #313131);
		color: white;
	}

	h2 {
		margin-bottom: 2rem;
	}

	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}

	ul {
		margin: 2 0 0 0;
	}
`

const SButton = styled.button`
	padding: 1rem 2rem;
	color: #313131;
	background: #ffff;
	border: 2px solid black;
	margin-right: 2rem;
	font-weight: 600;
`

const Info = styled.div`
	margin-left: 10rem;
`

export default Recipe
