const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

const fetchApi = async (url, options) => {
    const { headers, ...restOptions } = options;

    options = {
        headers: {
            ...defaultHeaders,
            ...headers,
        },
        ...restOptions
    };

    const response = await fetch(url, options);

    if (response.status === 204) {
        return null;
    }

    try {
        return await response.json();
    } catch (error) {
        console.error(error);

        return null;
    }
}

export default fetchApi;

export const getRequest = (url, params = {}) => {
    const urlParams = new URLSearchParams(params).toString();

    if (urlParams) {
        url += url.includes('?') ? `&${urlParams}` : `?${urlParams}`;
    }

    return fetchApi(url, {
        method: 'GET',
    });
}

export const deleteRequest = (url, params = {}) => {
    const urlParams = new URLSearchParams(params).toString();

    if (urlParams) {
        url += url.includes('?') ? `&${urlParams}` : `?${urlParams}`;
    }

    return fetchApi(url, {
        method: 'DELETE',
    });
}
