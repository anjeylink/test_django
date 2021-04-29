import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Button, Form, Spinner } from 'react-bootstrap';

import BackButton from '../layout/BackButton';
import TextInput from '../input/TextInput';

const validate = values => {
    const errors = {};

    ['name', 'lectures_quantity'].forEach(field => {
        if (!values[field]) {
            errors[field] = 'Field is required';
        }
    });

    if (values['lectures_quantity'] && isNaN(values['lectures_quantity'])) {
        errors['lectures_quantity'] = 'Field should be a number';
    }


    return errors;
}

const CourseForm = ({ onSubmit, record = {} }) => {

    return (
        <Formik
            initialValues={record}
            onSubmit={onSubmit}
            validate={validate}
            validateOnChange={false}
        >
            {({ handleSubmit, dirty, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    <TextInput label="Name" name="name"/>
                    <TextInput label="Start date" name="start_date" type="date"/>
                    <TextInput label="End date" name="end_date" type="date"/>
                    <TextInput label="Number of lectures" name="lectures_quantity" type="number"/>

                    <BackButton variant="info" className="mr-2"/>
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting || !dirty}
                    >
                        {isSubmitting && (
                            <Spinner animation="border" variant="light" size="sm" className="mr-2"/>
                        )}
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

CourseForm.propTypes = {
    record: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
}

export default CourseForm;
