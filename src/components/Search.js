import { useState } from "react"

import { useNavigate } from "react-router-dom"

const Search = () => {
	const [input, setInput] = useState("")
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		navigate(`searched/${input}`)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div class="container">
				<div class="inputs">
					<input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Search Recipe" />
				</div>
			</div>
		</form>
	)
}

export default Search
