import Header from "./utility/header";
import Footer from "./utility/Footer";

export default function PageTemplate({children}) {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
        )
}