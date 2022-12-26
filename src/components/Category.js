import { FaPizzaSlice, FaHamburger, FaMortarPestle } from "react-icons/fa"
import { GiNoodles, GiChopsticks } from "react-icons/gi"

import { Link } from "react-router-dom"

const Category = () => {
	// return (
	// 	<List>
	// 		<SLink to={"/cuisine/Italian"}>
	// 			<FaPizzaSlice />
	// 			<h4>Italian</h4>
	// 		</SLink>
	// 		<SLink to={"/cuisine/American"}>
	// 			<FaHamburger />
	// 			<h4>American</h4>
	// 		</SLink>
	// 		<SLink to={"/cuisine/Thai"}>
	// 			<GiNoodles />
	// 			<h4>Thai Foods</h4>
	// 		</SLink>
	// 		<SLink to={"/cuisine/Japanese"}>
	// 			<GiChopsticks />
	// 			<h4>Japanese</h4>
	// 		</SLink>
	// 	</List>
	// )
	return (
		<div className="container mt-2 ">
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
