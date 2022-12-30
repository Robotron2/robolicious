import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Contact = () => {
	return (
		<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
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
							<Link to={"/"}>
								<button className="btn btn-lg contact-btn rounded-pill">Home</button>
							</Link>
						</span>
					</nav>
				</motion.div>
			</header>

			<section id="contact" className="contact">
				<div className="container" data-aos="fade-up">
					<div className="section-header m-3 text-center">
						<h3>
							Need my service? <span>Contact Me</span>
						</h3>
					</div>

					<form action="https://formspree.io/f/mvonpjlv" method="POST" className="emailForm p-3 p-md-4">
						<div className="row">
							<div className="col-xl-6 form-group">
								<input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
							</div>
							<div className="col-xl-6 form-group">
								<input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
							</div>
						</div>
						<div className="form-group">
							<textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
						</div>

						<div className="text-center">
							<button className="btn btn-outline-danger rounded-pill btn-md">Send Message</button>
						</div>
					</form>
				</div>
			</section>
		</motion.div>
	)
}

export default Contact
