import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import "../index.css"
import { motion } from "framer-motion"

const Search = () => {
	const [input, setInput] = useState("")
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		navigate(`/searched/${input}`)
		setInput("")
	}

	return (
		<form onSubmit={handleSubmit}>
			<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="container">
				<div className="inputs">
					<input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Search Recipe" />
				</div>
			</motion.div>
		</form>
	)
}

export default Search
