import { join } from 'path';
import { readFile } from 'fs/promises';

export default async (_, res) => {
  const filePath = join(process.cwd(), 'public', 'robots.txt');
  const content = await readFile(filePath, 'utf-8');
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(content);
};
