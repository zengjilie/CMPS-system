import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("cmpsToken", req.body.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development", // https
      maxAge: 60 * 60 * 24, // 24 hours
      sameSite: "strict",
      path: "/",
    })
  );
  res.statusCode = 200;
  res.json({ success: true });
}
