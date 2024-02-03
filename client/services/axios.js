import { axiosConfig } from '~/config/axiosConfig'
import Axios from 'axios'

export const axios = Axios.create(axiosConfig)
