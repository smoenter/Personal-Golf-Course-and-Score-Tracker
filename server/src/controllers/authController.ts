import {  type Request, type Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';



export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: { username },
    });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
    const secretKey = process.env.JWT_SECRET_KEY || '';
  
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    return res.json({ token });
  } catch (err) {
    console.error(err)
    return res.status(500).json(err)
   
  }
 
};

export const signUp = async (req: Request, res: Response) => {
   try {
    const currentUser = await User.create(req.body)
    
  
    const secretKey = process.env.JWT_SECRET_KEY || '';
  
    const token = jwt.sign({ username:currentUser.username }, secretKey, { expiresIn: '1h' });
    return res.status(200).json({ token });
   } catch (err) {
    console.error(err)
    return res.status(500).json(err)
   }
  
   
  };