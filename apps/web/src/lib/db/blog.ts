import path from 'path';
import { getMDXData } from '@/lib/db/utils/get-mdx-data';

export async function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'src/contents/posts'));
}
