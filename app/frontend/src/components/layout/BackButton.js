import React from 'react';
import { Button } from 'react-bootstrap';

import useHistoryGoBack from '../../hooks/useHistoryGoBack';

const BackButton = props => {
    const goBack = useHistoryGoBack();

    const handleClick = () => {
        goBack();
    }

    return (
        <Button {...props} onClick={handleClick}>Back</Button>
    );
};

export default BackButton;
