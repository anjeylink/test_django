import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import useFetchOne from '../../hooks/useFetchOne';

import Course from '../../model/Course';
import RecordLoadingStatus from '../layout/RecordLoadingStatus';
import CourseForm from './CourseForm';
import useHistoryGoBack from '../../hooks/useHistoryGoBack';

const course = new Course();

const CourseEdit = () => {
    const { params: { pk } } = useRouteMatch();
    const { data, loading } = useFetchOne(pk, course);
    const goBack = useHistoryGoBack();

    const handleSubmit = async values => {
        try {
            await course.update(pk, values);

            goBack();
        } catch (error) {
            console.error(error);
            alert('Something went wrong');
        }
    }

    return (
        <>
            <h1>Editing course - #{pk}</h1>
            <RecordLoadingStatus loading={loading} data={data}/>
            {!loading && data && (
                <CourseForm onSubmit={handleSubmit} record={data}/>
            )}
        </>
    );
};

export default CourseEdit;
