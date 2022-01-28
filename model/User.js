import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
  password: {
    type: String, 
    required: [true, 'password is required']
  }, 
  age: {
    type: Number,
    required: [true, 'age is required'],
  },
  married: {
    type: Boolean,
    required: [true, 'married status is required'],
  },
});

const User = mongoose.model('User', userSchema);

export { User as default };
