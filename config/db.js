import mongoose from 'mongoose';

export const db_connect = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => console.log('db connection successful'))
    .catch((err) => console.log('db connection failed'));
};
