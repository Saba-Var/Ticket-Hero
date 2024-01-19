import type { UserAttrs, UserDoc, UserModel } from './types'
import { Password } from '../../services/password'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.statics.build = (attrs: UserAttrs) => new User(attrs)

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'))
    this.set('password', hashed)
  }
  done()
})

export const User = mongoose.model<UserDoc, UserModel>('User', userSchema)
