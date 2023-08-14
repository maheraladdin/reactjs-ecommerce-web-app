import Container from "react-bootstrap/Container";
import ProductDetails from "../../components/product/ProductDetails";
import RateContainer from "../../components/Rate/RateContainer";
import BestProductViewer from "../../components/utility/BestProductViewer";
import useGetProductByID from "../../Hooks/products/useGetProductByID";
import useGetProductsHomePage from "../../Hooks/products/useGetProductsHomePage";
import PageTemplate from "../../components/utility/pageTemplate";

export default function ProductDetailsPage() {
	useGetProductByID();
	const {mostSoldProducts, loadingMostSoldProducts} = useGetProductsHomePage();
	return (
		<PageTemplate>
			<Container className="d-flex flex-column gap-5 min-height-100vh py-4">
				<ProductDetails />
				<RateContainer />
				<BestProductViewer title={"Most Sold"} products={mostSoldProducts} loading={loadingMostSoldProducts}/>
			</Container>
		</PageTemplate>
	)
}