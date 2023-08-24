import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useCreateAddress from "../../Hooks/addresses/useCreateAddress";

export default function UserAddNewAddress() {
	const {
		validated,
		handlePostalCodeChange,
		handlePhoneChange,
		handleDescriptionChange,
		handleCityChange,
		handleAddressChange,
		handleCreateAddress,
		loading,
	} = useCreateAddress();
	return (
		<Form validated={validated} className="d-flex flex-column gap-3">
			<Form.Group controlId={"AddressTitle"}>
				<Form.Label>Address Title</Form.Label>
				<Form.Control onChange={handleAddressChange} required type={"text"} placeholder={"Address Title"} />
			</Form.Group>
			<Form.Group controlId={"City"}>
				<Form.Label>City</Form.Label>
				<Form.Control onChange={handleCityChange} required type={"text"} placeholder={"City"} />
			</Form.Group>
			<Form.Group controlId={"AddressDescription"}>
				<Form.Label>Address Description</Form.Label>
				<Form.Control onChange={handleDescriptionChange} required className="resize-none" as={"textarea"} rows={3} placeholder={"Address Description"} />
			</Form.Group>
			<Form.Group controlId={"postalCode"}>
				<Form.Label>Postal code</Form.Label>
				<Form.Control onChange={handlePostalCodeChange} required type={"number"} placeholder={"Phone Number"} />
			</Form.Group>
			<Form.Group controlId={"PhoneNumber"}>
				<Form.Label>Phone Number</Form.Label>
				<Form.Control onChange={handlePhoneChange} required type={"text"} placeholder={"Phone Number"} />
			</Form.Group>
			<Button onClick={handleCreateAddress} disabled={loading} className="align-self-end" variant={"primary"}>
				{loading ? "loading..." : (
					<>
					<i className="fa-solid fa-plus"></i>
					Add New Address
					</>
					)}
			</Button>
		</Form>
	)
}