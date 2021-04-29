import React from 'react';

import CourseForm from './CourseForm';
import Course from '../../model/Course';
import useHistoryGoBack from '../../hooks/useHistoryGoBack';

const course = new Course();

const CourseNew = () => {
    const goBack = useHistoryGoBack();

    const handleSubmit = async (values, { setErrors }) => {
        try {
            await course.create(values);

            goBack();
        } catch (error) {
            const errors = error.errors;

            if (errors) {
                setErrors(errors);
            }
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
