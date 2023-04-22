// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { RegisterData, userList } from './constant';

type Data = {
  name?: string;
  error?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = req.body as RegisterData;
  const user = userList.find(user => user.email === data.email && user.password === data.password);
  if (user) res.status(200).json({ name: user.name });
  else res.status(400).json({ error: 'Invalid credentials' });
}
