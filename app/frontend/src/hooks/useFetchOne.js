import { useEffect, useState } from 'react';

const useFetchOne = (pk, model) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);

            try {
                const response = await model.getOne(pk);

                setData(response);
            } catch (error) {
                console.error(error);
                alert('Something went wrong...');
            } finally {
                setLoading(false);
            }
        }

        fetch();
    }, [pk, model]);

    return {
        data,
        loading,
        setLoading,
        setData,
    };
}

export default useFetchOne;
