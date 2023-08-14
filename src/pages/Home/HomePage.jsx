import Slider from "../../components/home/slider";
import CategoryHomeViewer from "../../components/home/CategoryHomeViewer";
import BestProductViewer from "../../components/utility/BestProductViewer";
import AdvertisementBar from "../../components/home/advertisementBar";
import BrandHomeViewer from "../../components/home/BrandHomeViewer";
import useGetProductsHomePage from "../../Hooks/products/useGetProductsHomePage";
import PageTemplate from "../../components/utility/pageTemplate";

export default function HomePage() {
    const {newProducts, mostSoldProducts, loadingNewProducts, loadingMostSoldProducts} = useGetProductsHomePage();
    return (
        <PageTemplate>
            <Slider />
            <CategoryHomeViewer />
            <BestProductViewer title={"Most Sold"} products={mostSoldProducts} loading={loadingMostSoldProducts}/>
            <AdvertisementBar />
            <BestProductViewer title={"Added Earlier"} products={newProducts} loading={loadingNewProducts}/>
            <BrandHomeViewer />
        </PageTemplate>
    );
}