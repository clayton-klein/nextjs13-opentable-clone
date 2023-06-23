/**
 * here we're identifying the user using JWT.
 *
 * if the user reach this endpoint, it means that he passed by the
 * middleware check and that's why we're not checking things again here.
 */

import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  const bearerToken = req.headers["authorization"] as string;
  const token = bearerToken.split(" ")[1];

  // payload is like the body of the JWT that contains data
  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return res.status(401).json({
      errorMessage: "Unauthorized request",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    /**
     * selecting what we really need, otherwise it would return everything
     * about the user, including his password which is not recommended to do.
     */
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      city: true,
      phone: true,
    },
  });

  res.json({ user });
}
