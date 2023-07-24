import {Col, Row} from "react-bootstrap";
import CategoryCard from "./categoryCard";

export default function CategoriesBrowser() {
	return (
		<>
			<Row>
				{
					Array(12).fill().map((item,index) => (
						<Col
							key={index}
							xs={6}
							md={4}
							lg={2}
							className="mb-5"
						>
							<CategoryCard category={{name:"Category",image:"https://picsum.photos/200"}} />
						</Col>
					))
				}
			</Row>
		</>
	)
}