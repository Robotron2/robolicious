import { FaPizzaSlice, FaHamburger, FaMortarPestle } from "react-icons/fa"
import { GiNoodles, GiChopsticks } from "react-icons/gi"
import { RiMoreFill } from "react-icons/ri"

import { Link } from "react-router-dom"

const Category = () => {
	return (
		<div className="container mt-2 mb-4">
			<div className="row cuisine">
				<div className="feature-box  text-center ">
					<Link to={"/cuisine/African"}>
						<FaMortarPestle className="four" />
						<h4>African</h4>
					</Link>
				</div>
				<div className="feature-box  text-center ">
					<Link to={"/cuisine/Thai"}>
						<FaPizzaSlice className="four" />
						<h4>Thai Foods</h4>
					</Link>
				</div>
				<div className="feature-box  text-center ">
					<Link to={"/cuisine/American"}>
						<FaHamburger className="four" />
						<h4>American</h4>
					</Link>
				</div>
				<div className="feature-box  text-center ">
					<Link to={"/cuisine/Chinese"}>
						<GiNoodles className="four" />
						<h4>Chinese</h4>
					</Link>
				</div>
				<div className="feature-box  text-center ">
					<Link to={"/cuisine/Japanese"}>
						<GiChopsticks className="four" />
						<h4>Japanese</h4>
					</Link>
				</div>
				<div className="feature-box  text-center ">
					<Link to={"/more"}>
						<RiMoreFill className="four" />
						<h4>More</h4>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Category
