import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface IAxiosResponse {
  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R>
}

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'

const client = axios.create({
  baseURL: PROXY_URL + process.env.REACT_APP_API_URL,
})

export { client }
