import Button from "react-bootstrap/Button";
import useLoveButton from "../../Hooks/wishlist/useLoveButton";

export function ProductLoveButton({absolute = true,product}) {

	const {isLoved, handleLoveButton} = useLoveButton(product);
	return (
		<Button
			variant={isLoved ? `danger` : `secondary`}
			className={`${absolute && "position-absolute"}`}
			style={absolute ? {
				top: "10px",
				left: "10px"
			}: {}}
			onClick={handleLoveButton}
		>
			<i className="fa-solid fa-heart"></i>
		</Button>
	)
}