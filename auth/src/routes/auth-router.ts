import { currentUser as currentUserMiddleware } from '../middlewares/currentUser'
import { currentUserController } from '../controllers/current-user-controller'
import { signOutController } from '../controllers/sign-out-controller'
import { signUpController } from '../controllers/sign-up-controller'
import { signInController } from '../controllers/sign-in-controller'
import { signInValidation } from '../validation/sign-in-validation'
import { signUpValidation } from '../validation/sign-up-validation'
import { validateRequest } from '../middlewares/validateRequest'
import { asyncHandler } from '../middlewares/asyncHandler'
import { requireAuth } from '../middlewares/require-auth'
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

authRouter.get(
  '/current-user',
  currentUserMiddleware,
  requireAuth,
  currentUserController
)

authRouter.post('/sign-out', signOutController)

export { authRouter }
