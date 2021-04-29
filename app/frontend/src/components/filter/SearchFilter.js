import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import debounce from 'lodash/debounce';


const SearchFilter = ({ onFilterChange }) => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleChange = useCallback(debounce(event => {
        onFilterChange(event.target.value);
    }, 200), []);

    return (
        <Form.Control
            type="search"
            size="sm"
            onChange={handleChange}
            placeholder="Enter name for search..."
        />
    )
}

SearchFilter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
}

export default SearchFilter;

