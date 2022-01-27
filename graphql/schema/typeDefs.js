import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    Todos(query: todoFilterInput): [Todo!]!
    Todo(id: ID!): Todo!
    Users(query: userFilterInput): [User!]!
    User(id: ID!): User!
    greeting: String!
  }

  input todoFilterInput {
    title: String
    author: ID
    done: Boolean
  }

  input userFilterInput {
    name: String
    email: String
    age: Int
    married: Boolean
  }

  type Mutation {
    createUser(data: createUserInput!): User!
    updateUser(id: ID!, data: updateUserInput!): User!
    createTodo(data: createTodoInput!): Todo!
    updateTodo(id: ID!, data: updateTodoInput!): Todo!
  }

  input createUserInput {
    name: String!
    email: String!
    age: Int!
    married: Boolean!
  }

  input updateUserInput {
    name: String
    email: String
    age: Int
    married: Boolean
  }

  input createTodoInput {
    title: String!
    body: String!
    done: Boolean!
    author: ID!
  }

  input updateTodoInput {
    title: String
    body: String
    done: Boolean
  }

  type Todo {
    id: ID!
    title: String!
    body: String!
    author: User!
    done: Boolean!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    todos: [Todo!]!
    age: Int
    married: Boolean
  }
`;
