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

    if (response.status === 400) {
        const error = new Error('HTTP status code: ' + response.status);

        error.response = response;
        error.errors = await response.json();

        throw error;
    }

    return await response.json();
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

export const postRequest = (url, data) => {
    return fetchApi(url, {
        method: 'POST',
        body: JSON.stringify(data),
    });
}

export const putRequest = (url, data) => {
    return fetchApi(url, {
        method: 'PUT',
        body: JSON.stringify(data),
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
