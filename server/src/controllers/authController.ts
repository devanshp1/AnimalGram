import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User';

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    return res.status(201).json({ message: 'User created successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};
