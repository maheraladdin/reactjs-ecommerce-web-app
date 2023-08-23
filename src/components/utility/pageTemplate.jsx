import Header from "./header";
import Footer from "./Footer";
import {ToastContainer} from "react-toastify";

export default function PageTemplate({children}) {
    return (
        <>
            <Header />
                {children}
            <Footer />
            <ToastContainer
                autoClose={3000}
                closeOnClick={true}
                pauseOnFocusLoss={true}
                draggable={true}
                pauseOnHover={true}
            />
        </>
        )
}