// auth.tsx

import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path:'@/.env' });
var JWT_SECRET_KEY="eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5MTg0MDQ4OSwiaWF0IjoxNjkxODQwNDg5fQ.J8GfVStICfc08qG5We-oKpLz9SVVTm6kHP-g02cYork";



interface User {
  id: number;
  email: string;
  fullName: string;
  // Add more properties if needed
}


export const createAndStoreToken = (user: User): void => {
  const token = jwt.sign(user, process.env.JWT_SECRET_KEY as Secret, { expiresIn: '1h' });
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
};

export const getUserFromToken = (): User | null => {
  if (typeof window === 'undefined') {
    return null; // Running on the server, return null
  }

  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY as Secret) as unknown;
    const user = decodedToken as JwtPayload & User;
    return user;
  } catch (error) {
    return null;
  }
};


export default { createAndStoreToken, getUserFromToken };
