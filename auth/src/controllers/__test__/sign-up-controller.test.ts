import { signUpRouteUrl, authCredentials } from './config'
import request from 'supertest'
import { app } from '../../app'

it('Returns a 201 status code on successful sign up', async () => {
  return request(app).post(signUpRouteUrl).send(authCredentials).expect(201)
})

it('Returns a 422 status code with an invalid email', async () => {
  return request(app)
    .post(signUpRouteUrl)
    .send({
      email: 'testgmail.com',
      password: 'password123',
    })
    .expect(422)
})

it('Returns a 422 status code with an invalid password', async () => {
  return request(app)
    .post(signUpRouteUrl)
    .send({
      email: 'test@gmail.com',
      password: 'p',
    })
    .expect(422)
})

it('Return a 401 for duplicate emails', async () => {
  await request(app).post(signUpRouteUrl).send(authCredentials).expect(201)
  await request(app).post(signUpRouteUrl).send(authCredentials).expect(400)
})

it('Sets a cookie after successful sign up', async () => {
  const response = await request(app)
    .post(signUpRouteUrl)
    .send(authCredentials)
    .expect(201)
  expect(response.get('Set-Cookie')).toBeDefined()
})
