import Slider from "../home/slider";
import {useSelector} from "react-redux";

export function ProductGallery() {

	const images = useSelector(state => state.productReducer.product.images)

	return (
		<section className="p-4 bg-light rounded-5">
			<Slider height={500} advertisements={images && images.map((image,index) => ({
				image: image,
				id: index + 1,
			}))} className="rounded-4" />
		</section>
	)
}