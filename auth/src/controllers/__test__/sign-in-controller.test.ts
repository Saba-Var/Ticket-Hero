import { loginRouteUrl, signUpRouteUrl, authCredentials } from './config'
import request from 'supertest'
import { app } from '../../app'

it('Returns a 422 status code with an invalid email', async () => {
  return request(app)
    .post(loginRouteUrl)
    .send({
      email: 'testgmail.com',
      password: 'password123',
    })
    .expect(422)
})

it('Return a 400 if user does not exist', async () => {
  return request(app).post(loginRouteUrl).send(authCredentials).expect(400)
})

it('Return a 400 if password is incorrect', async () => {
  await request(app).post(signUpRouteUrl).send(authCredentials).expect(201)
  await request(app)
    .post(loginRouteUrl)
    .send({
      email: authCredentials.email,
      password: 'password1234',
    })
    .expect(400)
})

it('Sets a cookie after successful login', async () => {
  await request(app).post(signUpRouteUrl).send(authCredentials).expect(201)
  const signInResponse = await request(app)
    .post(loginRouteUrl)
    .send(authCredentials)
    .expect(200)
  expect(signInResponse.get('Set-Cookie')).toBeDefined()
})
