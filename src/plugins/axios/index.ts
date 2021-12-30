import Axios from './Axios'

const http = new Axios({ baseURL: '/api', timeout: 5000 })

export { http }
