import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {loginRoute} from "../../constants/routes";

export default function ProtectRoute({children, role}) {
    const userReducer = useSelector(state => state.userReducer);
    const {user, token} = userReducer;
    return token && user.role === role ? children : <Navigate to={loginRoute} />;
}