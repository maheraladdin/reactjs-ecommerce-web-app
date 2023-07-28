import {Col, Row} from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import {useSelector} from "react-redux";

export default function CategoriesBrowser() {
	const categories = useSelector(state => state.categoryReducer.categories);
	return (
		<>
			<Row>
				{
					categories.map((category,index) => (
						<Col
							key={index}
							xs={6}
							md={4}
							lg={2}
							className="mb-5"
						>
							<CategoryCard category={{name: category.name,image: category.image || "https://picsum.photos/200"}} />
						</Col>
					))
				}
			</Row>
		</>
	)
}