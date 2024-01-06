import mongoose from 'mongoose'

export interface UserAttrs {
  email: string
  password: string
}

export interface UserModel extends mongoose.Model<unknown> {
  build(attrs: UserAttrs): UserDoc
}

export interface UserDoc extends mongoose.Document, UserAttrs {}
