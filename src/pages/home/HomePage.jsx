import Slider from "../../components/home/slider";
import CategoryHomeViewer from "../../components/home/CategoryHomeViewer";
import BestProductViewer from "../../components/utility/BestProductViewer";
import AdvertisementBar from "../../components/home/advertisementBar";
import BrandHomeViewer from "../../components/home/BrandHomeViewer";

export default function HomePage() {
    return (
        <>
            <Slider />
            <CategoryHomeViewer />
            <BestProductViewer />
            <AdvertisementBar />
            <BestProductViewer />
            <BestProductViewer />
            <BrandHomeViewer />
        </>
    );
}