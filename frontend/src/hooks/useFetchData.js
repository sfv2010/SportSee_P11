import { useState, useEffect } from "react";
// import mockData from "../datas/mockUserData";

function useFetchData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch data (HTTP ${response.status})`
                    );
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
                setData([]);
            } finally {
                setLoading(false); // Update loading state
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetchData;
