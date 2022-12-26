import { Link } from "react-router-dom"

const Header = () => {
	// return (
	// 	<header id="header" className="header fixed-top d-flex align-items-center">
	// 		<div className="container d-flex align-items-center justify-content-between">
	// 			<Link to={"/"} className="logo d-flex align-items-center me-auto me-lg-0">

	// 			</Link>

	// 			<nav id="navbar" className="navbar">
	// 				<ul>
	// 					<li>
	// 						<Link to={"/"}>Contact</Link>
	// 					</li>
	// 				</ul>
	// 			</nav>
	// 			<i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
	// 			<i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
	// 		</div>
	// 	</header>
	// )
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" href="#">
					<h1>
						<i>roboliciousss</i>
						<span>.</span>
					</h1>
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav ml-auto">
						<li class="nav-item">
							<Link class="nav-link" to={"/"}>
								Contact
							</Link>
						</li>
					</ul>
					{/* <span className="navbar-text">Navbar text with an inline element</span> */}
				</div>
			</nav>
		</header>
	)
}

export default Header
