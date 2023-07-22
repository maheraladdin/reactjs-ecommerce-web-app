import Card from "react-bootstrap/Card";

export default function BrandCard({brand}) {
	return (
		<Card className="border-0" role="button">
			<Card.Img variant="top" src={brand.image} className="rounded-3"/>
		</Card>
	)
}