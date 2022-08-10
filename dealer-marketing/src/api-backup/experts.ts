// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Expert } from "@common-types/expert";
import type { NextApiRequest, NextApiResponse } from "next";
import { EXPERT_RESPONSE_DATA } from "./expertResponseData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Expert[]>,
) {
  res.status(200).json(EXPERT_RESPONSE_DATA);
}
