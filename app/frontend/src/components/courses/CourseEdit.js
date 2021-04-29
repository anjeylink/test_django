import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import useFetchOne from '../../hooks/useFetchOne';

import Course from '../../model/Course';
import RecordLoadingStatus from '../layout/RecordLoadingStatus';
import CourseForm from './CourseForm';

const course = new Course();

const CourseEdit = () => {
    const { params: { pk } } = useRouteMatch();
    const { data, loading } = useFetchOne(pk, course);

    return (
        <>
            <h1>Editing course - #{pk}</h1>
            <RecordLoadingStatus loading={loading} data={data}/>
            {!loading && data && (
                <CourseForm record={data}/>
            )}
        </>
    );
};

export default CourseEdit;
