import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<div class="container">
			<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div class="col-md-4 d-flex align-items-center">
					<span class="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
				</div>

				<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li class="ms-3">
						<Link>
							<svg class="bi" width="24" height="24">
								<use xlink:href="#twitter" />
							</svg>
						</Link>
					</li>
					<li class="ms-3">
						<Link>
							<svg class="bi" width="24" height="24">
								<use xlink:href="#twitter" />
							</svg>
						</Link>
					</li>
					<li class="ms-3">
						<Link>
							<svg class="bi" width="24" height="24">
								<use xlink:href="#twitter" />
							</svg>
						</Link>
					</li>
				</ul>
			</footer>
		</div>
	)
}

export default Footer
