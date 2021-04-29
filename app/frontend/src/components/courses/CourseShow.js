import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

import BackButton from '../layout/BackButton';
import RecordLoadingStatus from '../layout/RecordLoadingStatus';

import Course from '../../model/Course';
import { formatDate } from '../../utility/date';
import useFetchOne from '../../hooks/useFetchOne';

const course = new Course();

const CourseShow = () => {
    const { params: { pk } } = useRouteMatch();
    const { data, loading } = useFetchOne(pk, course);

    return (
        <>
            <h1 className="mt-5">Course - #{pk}</h1>
            <RecordLoadingStatus loading={loading} data={data}/>
            {!loading && data && (
                <ShowView record={data}/>
            )}
            <BackButton className="mt-5" />
        </>
    );
}

const ShowView = ({ record }) => (
    <ListGroup className="mt-5">
        <ListGroup.Item><b>Name</b>: {record.name}</ListGroup.Item>
        <ListGroup.Item><b>Start date</b>: {formatDate(record.start_date)}</ListGroup.Item>
        <ListGroup.Item><b>End date</b>: {formatDate(record.end_date)}</ListGroup.Item>
        <ListGroup.Item><b>Number of lectures</b>: {record.lectures_quantity}</ListGroup.Item>
    </ListGroup>
);

export default CourseShow;
