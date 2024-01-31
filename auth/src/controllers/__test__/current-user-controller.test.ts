import { currentUserRouteUrl, authCredentials } from '../../test/config'
import { getAuthCookie } from '../../test/utils'
import request from 'supertest'
import { app } from '../../app'

it('Return details about current authenticated user', async () => {
  const cookie = await getAuthCookie()
  const currentUserResponse = await request(app)
    .get(currentUserRouteUrl)
    .set('Cookie', cookie)
    .send()
    .expect(200)
  expect(currentUserResponse.body.currentUser.email).toEqual(
    authCredentials.email
  )
})
