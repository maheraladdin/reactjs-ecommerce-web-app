import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addBrand, removeFilters, setQueryString} from "../../Redux/Actions/filterActions";
import {productsRoute} from "../../constants/routes";

export default function useClickBrandCard(brand) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleOnClickBrandCard = () => {
        dispatch(removeFilters());
        dispatch(addBrand(brand._id));
        dispatch(setQueryString());
        navigate(productsRoute);
    }

    return {handleOnClickBrandCard};
}