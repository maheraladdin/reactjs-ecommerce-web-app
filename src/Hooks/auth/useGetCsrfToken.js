
export default function useGetCsrfToken() {
    if(!document.cookie) return false;
    return {
        csrfToken: document.cookie.split(';').find(cookie => cookie.includes('csrfToken')).split('=')[1]
    };
}