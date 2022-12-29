import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Header = () => {
	return (
		<header>
			<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="container">
				<nav className="navbar navbar-expand-lg ">
					<Link className="navbar-brand" to={"/"}>
						<h1>
							roboliciousss
							<span>.</span>
						</h1>
					</Link>
					<span className="navbar-text ml-auto btn">
						<Link to={"/contact"}>
							<button className="btn btn-lg contact-btn rounded-pill">Contact</button>
						</Link>
					</span>
				</nav>
			</motion.div>
		</header>
	)
}

export default Header
