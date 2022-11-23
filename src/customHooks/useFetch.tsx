import { useState, useEffect } from "react";
import axios from 'axios';
const useFetch = (url: string) => {
    const [status, setStatus] = useState({
        loading: false,
        data: undefined,
        error: undefined
    })

    function fetchNow(url: string){
        setStatus({loading: true, data: undefined, error: undefined})
        axios.get(url).then((res) => {
            setStatus({loading: false, data: res.data, error: undefined})
        }).catch((error) => {
            setStatus({loading: false,data: undefined, error: error})
        })

    }
    useEffect(() => {
        if(url) {
            fetchNow(url)
        }
    }, [])
    return {...status, fetchNow}
}
export default useFetch