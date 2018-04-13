import Vue from 'vue'

/*axios.defaults.baseURL = configuration._API_URL_;
axios.defaults.headers.common['X-API-Token'] = configuration._API_TOKEN_;
axios.defaults.timeout = configuration._AJAX_TIMEOUT_;
*/

export default function (Vue) {
	Vue.axios = axios.create({
		//baseURL: axios.defaults.baseURL,
		//timeout: axios.defaults.timeout
		baseURL: 'https://raywinkelman.com/wp-json/wp/v2/',
		timeout: Infinity
	});
	Vue.axios.interceptors.request.use(function (config) {
		if(Vue.config.debug === true){
			console.log('Request:', config)
		}

		return config;
	}, function (error) {
		return Promise.reject(error);
	});
	Vue.axios.interceptors.response.use(function (response) {
		if(Vue.config.debug === true){
			console.log('Response:', response)
		}
		
		return response;
	}, function (error) {
		if (error.response) {
			switch (error.response.status) {
			case 401:
			case 403:
				return Promise.reject('Oops. Unauthorized.');
			case 400:
			case 409:
			case 404:
			case 500:
			default:
				if (!error.response.statusText) {
					break;
				}
				return Promise.reject(error.response.statusText);
			}
		} else if (error.request) {
			return Promise.reject('Oops. There was a Network Error.');
		} else if (error.message) {
			return Promise.reject(error.message);
		}
		return Promise.reject("Oops. Something went wrong.");
	});
}
Object.defineProperties(Vue.prototype, {
	$axios: {
		get() {
			return Vue.axios
		}
	}
});