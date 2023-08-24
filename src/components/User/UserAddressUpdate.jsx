import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useUpdateAddress from "../../Hooks/addresses/useUpdateAddress";

export default function UserAddressUpdate() {
	const {
		validated,
		handlePostalCodeChange,
		postalCode,
		handlePhoneChange,
		phone,
		handleDescriptionChange,
		description,
		handleCityChange,
		city,
		handleAddressChange,
		address,
		handleUpdateAddress,
		loading,
	} = useUpdateAddress();
	return (
		<Form validated={validated} className="d-flex flex-column gap-3">
			<Form.Group controlId={"AddressTitle"}>
				<Form.Label>Address Title</Form.Label>
				<Form.Control onChange={handleAddressChange} value={address} required type={"text"} placeholder={"Address Title"} />
			</Form.Group>
			<Form.Group controlId={"City"}>
				<Form.Label>City</Form.Label>
				<Form.Control onChange={handleCityChange} value={city} required type={"text"} placeholder={"City"} />
			</Form.Group>
			<Form.Group controlId={"AddressDescription"}>
				<Form.Label>Address Description</Form.Label>
				<Form.Control onChange={handleDescriptionChange} value={description} required className="resize-none" as={"textarea"} rows={3} placeholder={"Address Description"} />
			</Form.Group>
			<Form.Group controlId={"postalCode"}>
				<Form.Label>Postal code</Form.Label>
				<Form.Control onChange={handlePostalCodeChange} value={postalCode} required type={"number"} placeholder={"Phone Number"} />
			</Form.Group>
			<Form.Group controlId={"PhoneNumber"}>
				<Form.Label>Phone Number</Form.Label>
				<Form.Control onChange={handlePhoneChange} value={phone} required type={"text"} placeholder={"Phone Number"} />
			</Form.Group>
			<Button onClick={handleUpdateAddress} disabled={loading} className="align-self-end" variant={"primary"}>
				{loading ? "loading..." : "Update Address"}
			</Button>
		</Form>
	)
}