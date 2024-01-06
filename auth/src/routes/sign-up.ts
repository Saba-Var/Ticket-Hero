import { signUpController } from '../controllers/sign-up-controller'
import { signUpValidation } from '../validation/sign-up-validation'
import express from 'express'

const signUpRouter = express.Router()

signUpRouter.post('/api/users/sign-up', signUpValidation, signUpController)

export { signUpRouter }
