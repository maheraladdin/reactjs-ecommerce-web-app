import Slider from "../../components/home/slider";
import CategoryHomeViewer from "../../components/home/CategoryHomeViewer";
import ProductViewer from "../../components/utility/productViewer";
import AdvertisementBar from "../../components/home/advertisementBar";
import BrandHomeViewer from "../../components/home/BrandHomeViewer";

export default function HomePage() {
    return (
        <>
            <Slider />
            <CategoryHomeViewer />
            <ProductViewer />
            <AdvertisementBar />
            <ProductViewer />
            <ProductViewer />
            <BrandHomeViewer />
        </>
    );
}