import request from 'supertest'
import { app } from '../../app'
import {
  currentUserRouteUrl,
  authCredentials,
  signUpRouteUrl,
  loginRouteUrl,
} from './config'

it('Return details about current authenticated user', async () => {
  await request(app).post(signUpRouteUrl).send(authCredentials).expect(201)
  const signInResponse = await request(app)
    .post(loginRouteUrl)
    .send(authCredentials)
    .expect(200)
  const cookie = signInResponse.get('Set-Cookie')
  const currentUserResponse = await request(app)
    .get(currentUserRouteUrl)
    .set('Cookie', cookie)
    .send()
    .expect(200)
  expect(currentUserResponse.body.currentUser.email).toEqual(
    authCredentials.email
  )
})
