import { axiosConfig } from '~/config/axiosConfig'
import axios from 'axios'

const instance = axios.create(axiosConfig)

export { instance as axios }
