// Consider replace with ENV variable
import { deleteRequest, getRequest } from '../api/fetch';
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
        return getRequest(this.getApiEndpoint() + pk + '/');
    }

    delete(pk) {
        return deleteRequest(this.getApiEndpoint() + pk + '/');
    }

    getApiEndpoint() {
        if (!this._normalizedApiUrl) {
            this._normalizedApiUrl = this._normalizeApiUrl();
        }

        return this._normalizedApiUrl;
    }

    _normalizeApiUrl() {
        const normalizedUrl = normalizePath(this.url);

        return `${API_BASE_URL}/${normalizedUrl}/`;
    }
}

export default Model;
