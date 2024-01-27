import request from 'supertest'
import { app } from '../../app'

it('Returns a 201 status code on successful sign up', async () => {
  return request(app)
    .post('/api/users/sign-up')
    .send({
      email: 'test@gmail.com',
      password: 'password123',
    })
    .expect(201)
})

it('Returns a 422 status code with an invalid email', async () => {
  return request(app)
    .post('/api/users/sign-up')
    .send({
      email: 'testgmail.com',
      password: 'password123',
    })
    .expect(422)
})

it('Returns a 422 status code with an invalid password', async () => {
  return request(app)
    .post('/api/users/sign-up')
    .send({
      email: 'test@gmail.com',
      password: 'p',
    })
    .expect(422)
})
