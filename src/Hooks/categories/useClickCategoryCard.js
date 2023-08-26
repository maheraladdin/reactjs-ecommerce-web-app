import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addCategory, removeFilters, setQueryString} from "../../Redux/Actions/filterActions";
import {productsRoute} from "../../constants/routes";

export default function useClickCategoryCard(category) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleOnClickCategoryCard = () => {
        dispatch(removeFilters());
        console.log(category);
        dispatch(addCategory(category._id));
        dispatch(setQueryString());
        navigate(productsRoute);
    }

    return {handleOnClickCategoryCard};
}