import mongoose from 'mongoose'

export interface UserAttrs {
  email: string
  password: string
}

export interface UserModel extends mongoose.Model<UserAttrs> {
  build(attrs: UserAttrs): UserDoc
}

export interface UserDoc extends mongoose.Document, UserAttrs {}
