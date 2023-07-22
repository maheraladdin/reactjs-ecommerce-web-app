import Container from "react-bootstrap/Container";

export default function Footer() {

	return (
		<footer className="py-3 bg-light border-top border-2 border-dark">
			<Container>
				<section className="d-flex justify-content-between">
				<section className="d-flex gap-2">
					<section><a href="https://facebook.com/" className="text-decoration-none text-dark" title="facebook account"><i className="fa-brands fa-facebook-f"></i></a></section>
					<section><a href="https://instagram.com/" className="text-decoration-none text-dark" title="instagram account"><i className="fa-brands fa-instagram"></i></a></section>
					<section><a href="https://twitter.com/" className="text-decoration-none text-dark" title="twitter account"><i className="fa-brands fa-twitter"></i></a></section>
					<section><a href="tel:+200000000000" className="text-decoration-none text-dark" title="call us">000-000-0000</a></section>
					<section><i className="fa-solid fa-phone"></i></section>
				</section>
				<section>
					&copy; {new Date().getFullYear()} {process.env.REACT_APP_NAME.replace(/_/g, " ").toUpperCase()}
				</section>
				<section className="d-flex gap-4">
					<section><a href="#" className="text-decoration-none text-dark">terms and conditions</a></section>
					<section><a href="#" className="text-decoration-none text-dark">privacy policy</a></section>
				</section>
				</section>
			</Container>
		</footer>
	)
}