import { FaPizzaSlice, FaHamburger, FaMortarPestle } from "react-icons/fa"
import { GiNoodles, GiChopsticks } from "react-icons/gi"
import { RiMoreFill } from "react-icons/ri"

import { Link, useNavigate } from "react-router-dom"

const Category = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/more`)
	}

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
				<div className="feature-box  text-center " onClick={handleClick}>
					<RiMoreFill className="four" />
					<h4 className>More</h4>
				</div>
			</div>
		</div>
	)
}

// const List = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	margin: 2rem 0rem;
// `

// const SLink = styled(NavLink)`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	border-radius: 50%;
// 	margin: 2rem;
// 	text-decoration: none;
// 	background: linear-gradient(35deg, #494949, #313131);
// 	width: 6rem;
// 	height: 6rem;
// 	cursor: pointer;
// 	transform: scale(0.8);

// 	h4 {
// 		color: white;
// 		font-size: 0.8rem;
// 	}

// 	svg {
// 		color: white;
// 		font-size: 1.5rem;
// 	}
// 	&.active {
// 		background: linear-gradient(to right, #f27121, #e94057);

// 		svg {
// 			color: white;
// 		}

// 		h4 {
// 			color: white;
// 		}
// 	}
// `

export default Category
