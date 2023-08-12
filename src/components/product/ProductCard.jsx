import {ProductCardTemplate} from "./ProductCardTemplate";
import {ProductLoveButton} from "./ProductLoveButton";


export default function ProductCard({product}) {

    return (
        <ProductCardTemplate product={product}>
            <ProductLoveButton/>
        </ProductCardTemplate>
    );
}

