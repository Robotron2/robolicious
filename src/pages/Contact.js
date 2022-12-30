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

			<section id="contact" class="contact">
				<div class="container" data-aos="fade-up">
					<div class="section-header m-3 text-center">
						<h3>
							Need my service? <span>Contact Me</span>
						</h3>
					</div>

					<form action="https://formspree.io/f/mvonpjlv" method="POST" class="emailForm p-3 p-md-4">
						<div class="row">
							<div class="col-xl-6 form-group">
								<input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
							</div>
							<div class="col-xl-6 form-group">
								<input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
							</div>
						</div>
						<div class="form-group">
							<textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
						</div>

						<div class="text-center">
							<button class="btn btn-outline-danger rounded-pill btn-md">Send Message</button>
						</div>
					</form>
				</div>
			</section>
		</motion.div>
	)
}

export default Contact
