import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  body: {
    type: String,
    required: [true, 'body is required'],
  },
  author: {
    type: mongoose.Types.ObjectId,
    required: [true, 'author is required'],
    ref: 'User',
  },
  done: {
    type: Boolean,
    required: [true, 'done status is required'],
  },
});

const Todo = mongoose.model('Todo', todoSchema);

export { Todo as default };
