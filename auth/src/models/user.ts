import mongoose from 'mongoose'

interface UserAttrs {
  email: string
  password: string
}

interface UserModel extends mongoose.Model<unknown> {
  build(attrs: UserAttrs): UserDoc
}

interface UserDoc extends mongoose.Document, UserAttrs {}

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

export const User = mongoose.model<UserDoc, UserModel>('User', userSchema)
