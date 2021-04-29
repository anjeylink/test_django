import React from 'react';

import CourseForm from './CourseForm';
import Course from '../../model/Course';
import useHistoryGoBack from '../../hooks/useHistoryGoBack';

const course = new Course();

const CourseNew = () => {
    const goBack = useHistoryGoBack();

    const handleSubmit = async values => {
        try {
            await course.create(values);

            goBack();
        } catch (error) {
            console.error(error);
            alert('Something went wrong');
        }
    }

    return (
        <>
            <h1>Create new course</h1>
            <CourseForm onSubmit={handleSubmit}/>
        </>
    );
};

export default CourseNew;
