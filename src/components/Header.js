import { Link } from "react-router-dom"

const Header = () => {
	return (
		<header>
			<div className="container">
				<nav className="navbar navbar-expand-lg ">
					<Link className="navbar-brand" to={"/"}>
						<h1>
							roboliciousss
							<span>.</span>
						</h1>
					</Link>
					<span className="navbar-text ml-auto btn">
						<button className="btn btn-lg contact-btn rounded-pill">Contact</button>
					</span>
				</nav>
			</div>
		</header>
	)
}

export default Header
