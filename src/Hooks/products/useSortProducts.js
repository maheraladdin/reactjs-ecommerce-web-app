import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setQueryString, setSortBy} from "../../Redux/Actions/filterActions";
export default function useSortProducts() {
    const numberOfDocuments = useSelector(state => state.productReducer.numberOfDocuments)
    const ascFilter = useSelector(state => state.filterReducer.asc);

    const dispatch = useDispatch();

    const [asc, setAsc] = useState(ascFilter);
    const [sort, setSort] = useState("");

    const sortHandler = (e) => {
        if(e.target.innerText === "no sort")
            setSort("");
        else if (e.target.innerText === "rating")
            setSort("ratingsAverage")
        else
            setSort(e.target.innerText);
    }

    const ascHandler = () => {
        if(!sort) return;
        setAsc(!asc);
    }

    useEffect(() => {
        if(sort) {
            (async () => {
                await dispatch(setSortBy(sort, asc));
                await dispatch(setQueryString());
            })();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort,asc]);

    return {
        numberOfDocuments,
        sortHandler,
        asc,
        ascHandler,
    }

}