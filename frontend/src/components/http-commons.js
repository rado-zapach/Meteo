import axios from 'axios'

export const AXIOS = axios.create({
  // baseURL: `http://localhost:8088`,
  // baseURL: `http://192.168.0.199:8088`,
  baseURL: `/`,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8080'
  }
})
