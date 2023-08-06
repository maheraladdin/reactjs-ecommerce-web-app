import Slider from "../../components/home/slider";
import CategoryHomeViewer from "../../components/home/CategoryHomeViewer";
import BestProductViewer from "../../components/utility/BestProductViewer";
import AdvertisementBar from "../../components/home/advertisementBar";
import BrandHomeViewer from "../../components/home/BrandHomeViewer";
import useGetProductsHomePage from "../../Hooks/products/useGetProductsHomePage";

export default function HomePage() {
    const {newProducts, mostSoldProducts} = useGetProductsHomePage();
    return (
        <>
            <Slider />
            <CategoryHomeViewer />
            <BestProductViewer title={"Most Sold"} products={mostSoldProducts} />
            <AdvertisementBar />
            <BestProductViewer title={"Added Earlier"} products={newProducts} />
            <BrandHomeViewer />
        </>
    );
}