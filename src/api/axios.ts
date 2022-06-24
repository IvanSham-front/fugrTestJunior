import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IAxiosResponse {
  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R>
}

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Expose-Headers': '*'
  }
})

export { client }
