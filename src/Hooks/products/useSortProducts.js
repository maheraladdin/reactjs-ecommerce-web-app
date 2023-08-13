import {useSelector} from "react-redux";
import {useState} from "react";
export default function useSortProducts(setQueryString) {
    const numberOfDocuments = useSelector(state => state.productReducer.numberOfDocuments);

    const [asc, setAsc] = useState(true);
    const [sort, setSort] = useState("");

    const sortHandler = (e) => {
        if (e.target.innerText === "rating")
            setSort("ratingsAverage")
        else
            setSort(e.target.innerText);
        setQueryString(prevState => {
            for(const query of prevState) {
                if(query.includes("sort=")) {
                    prevState.splice(prevState.indexOf(query), 1);
                }
            }
            if(asc) return [...prevState, `sort=-${sort}`]
            return [...prevState, `sort=${sort}`]
        })
    }

    // TODO: Fix this
    const ascHandler = () => {
        if(!sort) return;
        setAsc(!asc);
        setQueryString(prevState => {
            for(const query of prevState) {
                if(query.includes("sort=")) {
                    prevState.splice(prevState.indexOf(query), 1);
                }
            }
            if(asc) return [...prevState, `sort=-${sort}`]
            return [...prevState, `sort=${sort}`]
        })
    }

    return {
        numberOfDocuments,
        sortHandler,
        asc,
        ascHandler,
    }

}