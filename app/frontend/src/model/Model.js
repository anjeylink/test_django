// Consider replace with ENV variable
import { deleteRequest, getRequest, postRequest, putRequest } from '../api/fetch';
import { normalizePath } from '../utility/router';

const API_BASE_URL = 'http://localhost:8000';

class Model {
    /**
     * Resource API endpoint URL
     */
    url = '';

    /**
     * Normalized url API_BASE_URL + url
     */
    _normalizedApiUrl = null;

    get(params) {
        return getRequest(this.getApiEndpoint(), params);
    }

    getOne(pk) {
        return getRequest(this._recordApiUrl(pk));
    }

    create(data) {
        return postRequest(this.getApiEndpoint(), data);
    }

    update(pk, data) {
        return putRequest(this._recordApiUrl(pk), data);
    }

    delete(pk) {
        return deleteRequest(this._recordApiUrl(pk));
    }

    getApiEndpoint() {
        if (!this._normalizedApiUrl) {
            this._normalizedApiUrl = this._normalizeApiUrl();
        }

        return this._normalizedApiUrl;
    }

    _recordApiUrl(pk) {
        return this.getApiEndpoint() + pk + '/';
    }

    _normalizeApiUrl() {
        const normalizedUrl = normalizePath(this.url);

        return `${API_BASE_URL}/${normalizedUrl}/`;
    }
}

export default Model;
