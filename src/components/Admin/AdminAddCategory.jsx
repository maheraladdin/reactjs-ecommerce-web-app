import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UploadImage from "./UploadImage";
import {useEffect, useState} from "react";
import AddImage from "../../assets/images/add-image.png";
import {createCategory} from "../../Redux/Actions/categoryActions";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";

export default function AdminAddCategory() {
	// state of category name
	const [categoryName, setCategoryName] = useState("");
	// state of images to be displayed
	const [images, setImages] = useState([AddImage]);
	// state of images to be uploaded
	const [uploadImages, setUploadImages] = useState([]);
	// state of loading status
	const [loading, setLoading] = useState(false);
	// state of form validation
	const [validated, setValidated] = useState(false);
	// state of error message
	const [errorMessage, setErrorMessage] = useState("");

	const dispatch = useDispatch();

	// get the status of the request
	const status = useSelector(state => state.categoryReducer.status);

	// get error object
	const error = useSelector(state => state.categoryReducer.error);

	// post the category to the server
	const addCategory = async (e) => {
		// prevent the browser from refreshing
		e.preventDefault();

		// check if the form is valid
		setValidated(true);

		// check if the form is empty
		if(!categoryName || !uploadImages.length) return toast("Please fill all the fields", {
			type: "warning",
			position: "top-right",
			autoClose: 5000,
		});

		// create the form data
		const formData = new FormData();
		formData.append("name", categoryName);
		formData.append("image", uploadImages[0]);

		// start loading status
		setLoading(true);
		// send the request to the server
		await dispatch(createCategory({
				body: formData,
				config: {
					headers: {
						"Content-Type": "multipart/form-data",
						"Authorization": `Bearer ${process.env.REACT_APP_ADMIN_DEV_TOKEN}`
					}
				}
		}));


		// end loading status
		setLoading(false);

	}

	useEffect(() => {
		if(!loading) {
			// reset the form
			setImages([AddImage]);
			setUploadImages([]);
			setCategoryName("");
			setValidated(false);
		}
	},[loading]);

	useEffect(() => {
		if (status === 201) {
			// show the done toast message
			toast("Category added successfully", {
				type: "success",
				position: "top-right",
				autoClose: 5000,
			});
		} else if((error && error.response && error.response.data && error.response.data.message) || (error && error.message)) {
			// show the error toast message
			setErrorMessage(error.response.data.message || error.message);
		}
	},[status,error]);

	useEffect(() => {
		if(errorMessage)
			toast(errorMessage, {
				type: "error",
				position: "top-right",
				autoClose: 5000,
				onClose: () => setErrorMessage(""), // reset the error message
			})
	}, [errorMessage]);


	return (
		<>
			<section>
				<UploadImage setImages={setImages} images={images} uploadImages={uploadImages} setUploadImages={setUploadImages} />
			</section>
			<Form validated={validated} className="my-3 d-flex flex-column">
				<Form.Group className="mb-3" controlId="CategoryName">
					<Form.Label role={"button"}>Category Name</Form.Label>
					<Form.Control
						required
						type="text"
						value={categoryName}
						placeholder="Category Name"
						onChange={(e) => setCategoryName(e.target.value)}
					/>
				</Form.Group>
				<Button onClick={addCategory} className="align-self-end" variant="outline-success">
					<Spinner animation="border" size={"sm"} variant="success" className={`align-self-center me-2 ${loading ? "d-inline-block" : "d-none"}`} />
					Add Category
				</Button>
			</Form>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick={true}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={true}
				pauseOnHover={false}
			/>
		</>
	)
}