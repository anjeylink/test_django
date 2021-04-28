import React, { useEffect, useState } from 'react';
import Course from './model/Course';

const course = new Course();

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const response = await course.get();

            console.log(response)
            setLoading(false);
        };

        fetch();
    }, []);

    return (
        loading ? (
            <span>Loading....</span>
        ) : (
            <span>Done</span>
        )
    );
};

export default App;
