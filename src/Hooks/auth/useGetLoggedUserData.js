import useGetToken from "./useGetToken";
import baseURL from "../../Api/BaseURL";
import useGetCsrfToken from "./useGetCsrfToken";

export default function useGetLoggedUserData() {
    const {token} = useGetToken();
    const {csrfToken} = useGetCsrfToken();
    if(!token) return false;
    const payload = baseURL.get("/users/loggedUser", {
        headers: {
            "Authorization": `Bearer ${token}`,
            "csrf-token": csrfToken,
        }
    });
    return {
        user: payload.data
    }
}