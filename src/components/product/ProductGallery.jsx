import Slider from "../home/slider";

export function ProductGallery() {

	const advertisements = [
		{
			id: 1,
			image: "https://picsum.photos/500",
		},
		{
			id: 2,
			image: "https://picsum.photos/500",
		},
		{
			id: 3,
			image: "https://picsum.photos/500",
		},
	];

	return (
		<section className="p-4 bg-light rounded-5">
			<Slider height={500} advertisements={advertisements} className="rounded-4" />
		</section>
	)
}