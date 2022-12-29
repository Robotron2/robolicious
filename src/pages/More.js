import { Link } from "react-router-dom"
import { motion } from "framer-motion"

// Images
import british from "../images/british.jpg"
import cajun from "../images/cajun.jpg"
import caribbean from "../images/caribbean.jpg"
import easternEuropean from "../images/easternEuropean.jpg"
import european from "../images/european.jpeg"
import french from "../images/french.jpg"
import german from "../images/german.jpg"
import greek from "../images/greek.jpg"
import indian from "../images/indian.jpg"
import irish from "../images/irish.jpg"
import jewish from "../images/jewish.jpg"
import korean from "../images/korean.jpeg"
import latinAmerican from "../images/latinAmerican.jpeg"
import mediterranean from "../images/mediterranean.jpg"
import mexican from "../images/mexican.jpg"
import middleEastern from "../images/middleEastern.jpg"
import nordic from "../images/nordic.jpg"
import southern from "../images/southern.jpg"
import spanish from "../images/spanish.jpg"
import vietnamese from "../images/vietnamese.jpg"

const MoreComponent = () => {
	// return (
	// 	<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="container">
	// 		<ul className="ulCards">
	// 			<Link to={"/cuisine/British"}>
	// 				<li className="liCard">
	// 					<img src={british} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">British</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>

	// 			<Link to={"/cuisine/Cajun"}>
	// 				<li className="liCard">
	// 					<img src={cajun} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Cajun</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Caribbean"}>
	// 				<li className="liCard">
	// 					<img src={caribbean} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Caribbean</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Eastern European"}>
	// 				<li className="liCard">
	// 					<img src={easternEuropean} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Eastern European</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/European"}>
	// 				<li className="liCard">
	// 					<img src={european} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">European</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/French"}>
	// 				<li className="liCard">
	// 					<img src={french} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">French</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/German"}>
	// 				<li className="liCard">
	// 					<img src={german} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">German</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Greek"}>
	// 				<li className="liCard">
	// 					<img src={greek} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Greek</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Indian"}>
	// 				<li className="liCard">
	// 					<img src={indian} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Indian</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Irish"}>
	// 				<li className="liCard">
	// 					<img src={irish} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Irish</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Jewish"}>
	// 				<li className="liCard">
	// 					<img src={jewish} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Jewish</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Korean"}>
	// 				<li className="liCard">
	// 					<img src={korean} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Korean</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Latin American"}>
	// 				<li className="liCard">
	// 					<img src={latinAmerican} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Latin American</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Mediterranean"}>
	// 				<li className="liCard">
	// 					<img src={mediterranean} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Mediterranean</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Mexican"}>
	// 				<li className="liCard">
	// 					<img src={mexican} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Mexican</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Middle Eastern"}>
	// 				<li className="liCard">
	// 					<img src={middleEastern} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Middle Eastern</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Nordic"}>
	// 				<li className="liCard">
	// 					<img src={nordic} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Nordic</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Southern"}>
	// 				<li className="liCard">
	// 					<img src={southern} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Southern</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Spanish"}>
	// 				<li className="liCard">
	// 					<img src={spanish} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Spanish</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 			<Link to={"/cuisine/Vietnamese"}>
	// 				<li className="liCard">
	// 					<img src={vietnamese} className="liCard-img" alt="" />
	// 					<div className="liCard-overlay">
	// 						<div className="liCard-header">
	// 							<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
	// 								<path />
	// 							</svg>
	// 							<div className="liCard-header-text">
	// 								<h3 className="liCard-title">Vietnamese</h3>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</li>
	// 			</Link>
	// 		</ul>
	// 	</motion.div>
	// )

	return (
		<div className="container">
			<div class="card-deck mb-3">
				<div class="card">
					<Link to={"/cuisine/british"}>
						<img src={british} class="card-img-top w-100 p-2" alt="..." />
						<div class="card-body ">
							<h5 class="card-title">British</h5>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to={"/cuisine/Cajun"}>
						<img src={cajun} class="card-img-top h-100 w-100" alt="..." />
						<div class="card-body p-4">
							<h5 class="card-title">Cajun</h5>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to={"/cuisine/Caribbean"}>
						<img src={caribbean} class="card-img-top h-100 w-100" alt="..." />
						<div class="card-body p-5">
							<h5 class="card-title">Caribbean</h5>
						</div>
					</Link>
				</div>
			</div>
			<div class="card-deck mb-3">
				<div class="card">
					<Link to={"/cuisine/Eastern European"}>
						<img src={easternEuropean} class="card-img-top " alt="..." />
						<div class="card-body">
							<h5 class="card-title">Eastern European</h5>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to={"/cuisine/European"}>
						<img src={european} class="card-img-top " alt="..." />
						<div class="card-body">
							<h5 class="card-title">European</h5>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to={"/cuisine/French"}>
						<img src={french} class="card-img-top h-100" alt="..." />
						<div class="card-body">
							<h5 class="card-title">French</h5>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default MoreComponent
