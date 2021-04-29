import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const RowActions = ({ row, onDelete, onEdit }) => (
    <DropdownButton
        title="Actions"
        size="sm"
        variant="secondary"
    >
        <Dropdown.Item onClick={() => onEdit(row)}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => onDelete(row)}>Delete</Dropdown.Item>
    </DropdownButton>
);

export default RowActions;
