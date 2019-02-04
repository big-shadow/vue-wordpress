import _axios from 'axios'

let axios = _axios.create({
  baseURL: 'https://wp.raywinkelman.com/wp-json/wp/v2/',
  timeout: Infinity
})

axios.interceptors.request.use(
  function(config) {
    config.headers['Accept'] = 'application/json'
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)

axios.all = _axios.all
axios.spread = _axios.spread

export default axios
