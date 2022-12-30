import { Link } from "react-router-dom"
import { BsGithub, BsTwitter } from "react-icons/bs"
import { SiGmail } from "react-icons/si"

const Footer = () => {
	let currentYear = new Date().getFullYear()

	return (
		<div class="container mt-5 pt-3">
			<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-5 border-top">
				<div class="col-md-4 d-flex align-items-center">
					<span class="mb-3 mb-md-0 text-muted">&copy; {currentYear} Robotron</span>
				</div>

				<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li class="ms-3">
						<Link to={"/contact"}>
							<SiGmail className="two" />
						</Link>
					</li>
					<li class="ms-3">
						<a href="https://github.com/Robotron2" target="_blank" rel="noopener noreferrer">
							<BsGithub className="two" />
						</a>
					</li>
					<li class="ms-3">
						<a href="https://twitter.com/Robotron090343" target="_blank" rel="noreferrer">
							<BsTwitter className="two" />
						</a>
					</li>
				</ul>
			</footer>
		</div>
	)
}

export default Footer
