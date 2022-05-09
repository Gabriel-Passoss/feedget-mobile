import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.65.187:4444'
})