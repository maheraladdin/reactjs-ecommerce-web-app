import Button from "react-bootstrap/Button";

export function ProductLoveButton({absolute = true}) {
	return (
		<Button
			variant="danger"
			className={`${absolute && "position-absolute"}`}
			style={absolute ? {
				top: "10px",
				left: "10px"
			}: {}}
		>
			<i className="fa-solid fa-heart"></i>
		</Button>
	)
}