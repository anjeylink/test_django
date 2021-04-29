import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Form } from 'react-bootstrap';

import SearchFilter from '../filter/SearchFilter';

const SmallLabel = styled(Form.Label)`
    font-size: 14px;
`;

const DateFilter = props => (
    <Form.Control
        type="date"
        size="sm"
        {...props}
    />
);

const CourseFilter = ({ setFilters }) => {

    const handleFilterChange = (name, value) => {
        setFilters(filters => ({ ...filters, [name]: value }));
    }

    return (
        <Form>
            <Form.Row>
                <Col>
                    <SearchFilter onFilterChange={value => handleFilterChange('search', value)}/>
                </Col>
            </Form.Row>
            <Form.Row className="mt-2">
                <Form.Group as={Col} controlId="start_date">
                    <SmallLabel>Start date</SmallLabel>
                    <DateFilter onChange={e => handleFilterChange('start_date', e.target.value)}/>
                </Form.Group>
                <Form.Group as={Col} controlId="end_date">
                    <SmallLabel>End date</SmallLabel>
                    <DateFilter onChange={e => handleFilterChange('end_date', e.target.value)}/>
                </Form.Group>
            </Form.Row>
        </Form>
    );
}

CourseFilter.propTypes = {
    setFilters: PropTypes.func.isRequired,
}

export default CourseFilter;
