import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { TRAX_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, "hello");
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("Not real user");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not Authorized" });
        return;
      }

      console.log("auth.ts");
      console.log("Token:", token);

      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not Authorized" });
  };
};

export const validateToken = token => {
  const user = jwt.verify(token, "hello")
  return user
}