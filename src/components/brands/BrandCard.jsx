import Card from "react-bootstrap/Card";
import useClickBrandCard from "../../Hooks/brands/useClickBrandCard";

export default function BrandCard({brand}) {
	const {handleOnClickBrandCard} = useClickBrandCard(brand);
	return (
		<Card onClick={handleOnClickBrandCard} className="border-0" role="button">
			<Card.Img variant="top" src={brand.image} alt={"awesome brand is here"} className="rounded-3"/>
		</Card>
	)
}