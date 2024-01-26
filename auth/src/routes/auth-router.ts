import { signUpController } from '../controllers/sign-up-controller'
import { signInController } from '../controllers/sign-in-controller'
import { signInValidation } from '../validation/sign-in-validation'
import { signUpValidation } from '../validation/sign-up-validation'
import { validateRequest } from '../middlewares/validateRequest'
import { asyncHandler } from '../middlewares/asyncHandler'
import express from 'express'

const authRouter = express.Router()

authRouter.post(
  '/sign-up',
  signUpValidation,
  validateRequest,
  asyncHandler(signUpController)
)

authRouter.post(
  '/sign-in',
  signInValidation,
  validateRequest,
  asyncHandler(signInController)
)

authRouter.post('/sign-out', (_req, res) => {
  res.send('sign out route')
})

authRouter.get('/current-user', (_req, res) => {
  res.send('Test user data')
})

export { authRouter }
