import { Link } from "react-router-dom"

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
	return (
		<div className="container">
			<div className="container mt-2 mb-4">
				<ul className="ulCards">
					<Link to={"/cuisine/British"}>
						<li className="liCard">
							<img src={british} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">British</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>

					<Link to={"/cuisine/Cajun"}>
						<li className="liCard">
							<img src={cajun} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Cajun</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Caribbean"}>
						<li className="liCard">
							<img src={caribbean} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Caribbean</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Eastern European"}>
						<li className="liCard">
							<img src={easternEuropean} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Eastern European</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/European"}>
						<li className="liCard">
							<img src={european} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">European</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/French"}>
						<li className="liCard">
							<img src={french} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">French</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/German"}>
						<li className="liCard">
							<img src={german} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">German</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Greek"}>
						<li className="liCard">
							<img src={greek} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Greek</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Indian"}>
						<li className="liCard">
							<img src={indian} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Indian</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Irish"}>
						<li className="liCard">
							<img src={irish} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Irish</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Jewish"}>
						<li className="liCard">
							<img src={jewish} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Jewish</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Korean"}>
						<li className="liCard">
							<img src={korean} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Korean</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Latin American"}>
						<li className="liCard">
							<img src={latinAmerican} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Latin American</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Mediterranean"}>
						<li className="liCard">
							<img src={mediterranean} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Mediterranean</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Mexican"}>
						<li className="liCard">
							<img src={mexican} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Mexican</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Middle Eastern"}>
						<li className="liCard">
							<img src={middleEastern} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Middle Eastern</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Nordic"}>
						<li className="liCard">
							<img src={nordic} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Nordic</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Southern"}>
						<li className="liCard">
							<img src={southern} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Southern</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Spanish"}>
						<li className="liCard">
							<img src={spanish} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Spanish</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
					<Link to={"/cuisine/Vietnamese"}>
						<li className="liCard">
							<img src={vietnamese} className="liCard-img" alt="" />
							<div className="liCard-overlay">
								<div className="liCard-header">
									<svg className="liCard-arc" xmlns="http://www.w3.org/2000/svg">
										<path />
									</svg>
									<div className="liCard-header-text">
										<h3 className="liCard-title">Vietnamese</h3>
									</div>
								</div>
							</div>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	)
}

export default MoreComponent
