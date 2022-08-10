// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Blog } from "@common-types/blog";
import type { NextApiRequest, NextApiResponse } from "next";
import { BLOG_RESPONSE_DATA } from "./blogResponseData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog[]>,
) {
  res.status(200).json(BLOG_RESPONSE_DATA);
}
