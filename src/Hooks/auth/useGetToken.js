
export default function useGetToken() {
    if(!document.cookie) return false;
    return {
        token: document.cookie.split(';').find(cookie => cookie.includes('token').split('=')[1])
    };
}