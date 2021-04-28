// Consider replace with ENV variable
import { get } from '../api/fetch';

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
        return get(this.getApiEndpoint(), params);
    }

    getApiEndpoint() {
        if (!this._normalizedApiUrl) {
            this._normalizedApiUrl = this._normalizeApiUrl();
        }

        return this._normalizedApiUrl;
    }

    _normalizeApiUrl() {
        const normalizedUrl = this.url.split('/').filter(s => s).join('/');

        return `${API_BASE_URL}/${normalizedUrl}/`;
    }
}

export default Model;
