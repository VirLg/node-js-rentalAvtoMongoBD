import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: String,
  password: String,
});

const AuthModel = model('user', userSchema);
export default AuthModel;
