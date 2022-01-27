export const resolvers = {
  Query: {
    greeting() {
      return 'say hello from the other side';
    },
    Todos: async (parent, { query }, { Todo, User }, info) => {
      if (!query) return await Todo.find();

      const { title, author, done } = query;

      // build filter Query
      const filterQuery = {};
      if (title) filterQuery.title = title;
      if (author) filterQuery.author = author;
      if (done) filterQuery.done = filter;

      return await Todo.find({ ...filterQuery });
    },
    Todo: async (parent, { query: id }, { Todo }, info) => {
      return await Todo.findById(id);
    },
    Users: async (parent, { query }, { User }, info) => {
      if (!query) return await User.find();

      const { name, age, married } = query;

      const filterQuery = {};
      if (name) filterQuery.name = name;
      if (age) filterQuery.age = age;
      if (married) filterQuery.married = married;

      if (filterQuery.age) {
        const user = await User.find({ ...filterQuery, age: { $gte: age } });
        return user;
      }

      return await User.find({ ...filterQuery });
    },
    User: async (parent, { query: id }, { User }, info) => {
      return await User.findById(id);
    },
  },
  Mutation: {
    createTodo: async (parent, { data }, { Todo }, info) => {
      const todo = new Todo({ ...data });
      await todo.save();
      return todo;
    },
    updateTodo: async (parent, { id, data }, { Todo }, info) => {
      const updatedTodo = Todo.findByIdAndUpdate(id, { ...data }, { new: true });
      if (!updatedTodo) throw new Error('todo item does not exist');

      return updatedTodo;
    },
    createUser: async (parent, { data }, { User }, info) => {
      const user = new User({ ...data });
      await user.save();
      return user;
    },
    updateUser: async (parent, { id, data }, { User }, info) => {
      const user = await User.findById(id);
      if (!user) throw new Error('user does not exist');
      const updatedUser = new User({ ...user, ...data });
      await updatedUser.save();
      return updatedUser;
    },
  },
  Todo: {
    author: async (parent, args, { User }, info) => {
      return await User.findById({ _id: parent.author });
    },
  },
  User: {
    todos: async (parent, args, { Todo }, info) => {
      return await Todo.find({ author: parent._id });
    },
  },
};
