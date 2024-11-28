// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BLOG_RESPONSE_DATA } from "@constants/blog";
import { Blog } from "@self-types/blog";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog[]>,
) {
  res.status(200).json(BLOG_RESPONSE_DATA);
}
