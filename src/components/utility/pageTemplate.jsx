import Header from "./header";
import Footer from "./Footer";

export default function PageTemplate({children}) {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
        )
}