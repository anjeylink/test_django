import { useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

const useHistoryGoBack = () => {
    const { push } = useHistory();
    const { url } = useRouteMatch();

    return useCallback(() => {
        const urlParts = url.split('/');

        const lastSegment = urlParts.pop();

        if (lastSegment === 'show') {
            urlParts.pop()
        }

        push(urlParts.join('/'));
    }, [push, url]);
}

export default useHistoryGoBack;
