import React from 'react';
import PropTypes from 'prop-types';
import { Alert, ProgressBar } from 'react-bootstrap';

const RecordLoadingStatus = ({ loading, data }) => (
    <>
        {loading && (
            <ProgressBar animated now={100}/>
        )}
        {!loading && !data && (
            <Alert variant="danger">
                Could not load record
            </Alert>
        )}
    </>
);

RecordLoadingStatus.propTypes = {
    data: PropTypes.object,
    loading: PropTypes.bool.isRequired,
};

export default RecordLoadingStatus;