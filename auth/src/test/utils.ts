import { authCredentials, signUpRouteUrl } from './config'
import request from 'supertest'
import { app } from '../app'

export const getAuthCookie = async () => {
  const response = await request(app)
    .post(signUpRouteUrl)
    .send(authCredentials)
    .expect(201)

  const cookie = response.get('Set-Cookie')

  return cookie
}
