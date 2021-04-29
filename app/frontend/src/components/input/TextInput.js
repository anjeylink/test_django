import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { useField } from 'formik';

const TextInput = ({ name, label, placeholder, type }) => {
    const [field, meta] = useField(name);

    const value = field.value === undefined ? '' : field.value;

    return (
        <Form.Group controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={field.onChange}
                isValid={meta.touched && !meta.error}
                isInvalid={meta.error}
            />
            <Form.Control.Feedback type="invalid">
                {meta.error}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
};

TextInput.defaultProps = {
    placeholder: '',
    type: 'text',
}

export default TextInput;
