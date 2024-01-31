import request from 'supertest'
import { app } from '../../app'
import {
  authCredentials,
  signOutRouteUrl,
  signUpRouteUrl,
  loginRouteUrl,
} from '../../test/config'

describe(`POST:${signOutRouteUrl} - Sign out controller`, () => {
  it('Clears the cookie after signing out', async () => {
    await request(app).post(signUpRouteUrl).send(authCredentials).expect(201)
    const signInResponse = await request(app)
      .post(loginRouteUrl)
      .send(authCredentials)
      .expect(200)
    expect(signInResponse.get('Set-Cookie')).toBeDefined()
    const signOutResponse = await request(app)
      .post(signOutRouteUrl)
      .send({})
      .expect(200)
    expect(signOutResponse.get('Set-Cookie')).toBeDefined()
    expect(signOutResponse.body.message).toEqual('Sign out successfully!')
  })
})
