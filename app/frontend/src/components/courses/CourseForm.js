import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import BackButton from '../layout/BackButton';
import { Button } from 'react-bootstrap';

const CourseForm = ({ onSubmit, children, record = {} }) => {
    const isEdit = !!record.pk;

    return (
        <Formik initialValues={record} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
                <form action="">

                    <BackButton variant="info" className="mr-2" />
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Submit
                    </Button>
                </form>
            )}
        </Formik>
    );
}

CourseForm.propTypes = {
    record: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
}

export default CourseForm;
