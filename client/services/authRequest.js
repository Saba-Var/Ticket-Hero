import { axios } from '~/services/axios'

export const signUpRequest = async (data) => {
  return axios.post('/api/users/sign-up', data)
}
