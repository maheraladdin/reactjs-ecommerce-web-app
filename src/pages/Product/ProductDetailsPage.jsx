import Container from "react-bootstrap/Container";
import ProductDetails from "../../components/product/ProductDetails";
import RateContainer from "../../components/Rate/RateContainer";
import BestProductViewer from "../../components/utility/BestProductViewer";
import useGetProductByID from "../../Hooks/products/useGetProductByID";

export default function ProductDetailsPage() {
	useGetProductByID();
	return (
		<Container className="d-flex flex-column gap-5 min-height-100vh py-4">
			<ProductDetails />
			<RateContainer />
			<BestProductViewer />
		</Container>
	)
}