import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  purchases: [{
    origin: { type: String},
    destination: { type: String},
    quantity: { type: String},
    date: { type: String},
    hour: { type: String},
    state: { type: String},
  }]
})

export const User = mongoose.model('User', UserSchema, 'users')