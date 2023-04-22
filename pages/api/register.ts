// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { RegisterData, userList } from './constant';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body as RegisterData;
  const user = userList.find(user => user.email === data.email);
  if (user) res.status(400).json({ error: 'Bu kullanıcı zaten var' });
  else {
    userList.push(data);
    res.status(201).json({});
  }
}
