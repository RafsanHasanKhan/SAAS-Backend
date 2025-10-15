import config from '../../config';
import { IUser } from './user.interface';
import { UserModel } from './user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createUser = async (userData: Partial<IUser>) => {
  const user = await UserModel.create(userData);
  return user;
};



const loginUser = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) throw new Error('Invalid password');

  const token = jwt.sign(
    { id: user._id, role: user.role },
    config.jwt.secret,
    {
      expiresIn: config.jwt.expires_in,
    }
  );
  return {user, token}
}

export const userService = {
  createUser,
  loginUser,
};
