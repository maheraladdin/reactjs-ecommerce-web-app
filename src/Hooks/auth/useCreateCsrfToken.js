import baseURL from "../../Api/BaseURL";
import useGetToken from "./useGetToken";

export default function useCreateCsrfToken() {
    const {token} = useGetToken();
    if(!token) return false;
    const payload = baseURL.get("/auth/createCsrfToken", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    const csrfToken = payload.headers["csrf-token"];
    document.cookie += `csrfToken=${csrfToken};`;
}