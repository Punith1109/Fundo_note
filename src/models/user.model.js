import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    first_name: {
      type: String
    },
    last_name:{
      type: String
    },
    email_id: {
      type: String
    },
    password:{
      type: String
    },
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
