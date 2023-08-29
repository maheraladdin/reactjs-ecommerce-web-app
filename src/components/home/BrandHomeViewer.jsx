import Container from "react-bootstrap/Container";
import BrandCard from "../brands/BrandCard";
import SubTitle from "../utility/subTitle";
import {Col, Row, Spinner} from "react-bootstrap";
import {brandsRoute} from "../../constants/routes";
import useGetBrandsHomePage from "../../Hooks/brands/useGetBrandsHomePage";

export default function BrandHomeViewer() {

	const {brands, loading} = useGetBrandsHomePage();

	return (
		<Container>
			<SubTitle title="Brands" buttonText="View All" route={brandsRoute} />
			<Row
				style={{minHeight: "250px"}}
				className="justify-content-center align-items-center"
			>
			{
				loading ? <Spinner animation="border" variant="primary" className={`align-self-center ${loading ? "visible" : "invisible"}`} />
					: brands.length <= 0 ? null : brands.map((brand, i) => (
						<Col
							key={i}
							xs={6}
							md={4}
							lg={3}
							xl={2}
							className="mb-5"
						>
							<BrandCard brand={brand}/>
						</Col>
					))
			}
			</Row>
		</Container>
	)
}