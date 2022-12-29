import Header from "../components/Header"

const Contact = () => {
	return (
		<div>
			<Header />
			<section id="contact" class="contact">
				<div class="container" data-aos="fade-up">
					<div class="section-header m-3 text-center">
						<h3>Contact</h3>
						<p>
							Need my service? <span>Contact Me</span>
						</p>
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
							<button class="btn btn-outline-danger rounded-pill btn-lg">Send Message</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	)
}

export default Contact
