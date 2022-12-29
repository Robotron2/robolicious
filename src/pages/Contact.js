const Contact = () => {
	return (
		<div>
			<section id="contact" class="contact">
				<div class="container" data-aos="fade-up">
					<div class="section-header">
						<h2>Contact</h2>
						<p>
							Need Help? <span>Contact Us</span>
						</p>
					</div>

					<form action="forms/contact.php" method="post" class="php-email-form p-3 p-md-4">
						<div class="row">
							<div class="col-xl-6 form-group">
								<input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
							</div>
							<div class="col-xl-6 form-group">
								<input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
							</div>
						</div>
						<div class="form-group">
							<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
						</div>
						<div class="form-group">
							<textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
						</div>

						<div class="text-center">
							<button type="submit" class="btn btn-dark">
								Send Message
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	)
}

export default Contact
