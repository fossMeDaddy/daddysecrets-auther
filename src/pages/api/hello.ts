// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  return res.redirect(`${process.env.CLERK_BASE_URL}/sign-in?redirect_url=${process.env.CLERK_REDIRECT_URL}`);
}
