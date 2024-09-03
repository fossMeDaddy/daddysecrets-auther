import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { getToken } = getAuth(req);
  const token = await getToken({
    template: "secrets_cli_token",
  });

  return res.json({
    token,
    message: "Paste this token in the CLI when authenticating.",
  });
}
