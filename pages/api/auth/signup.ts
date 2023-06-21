// these are special Next.js types that we can use on params
import { NextApiRequest, NextApiResponse } from "next";

// library to validate the inputs
import validator from "validator";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // we want this endpoint to be accessed only by POST requests, any other HTTP
  // verb should fail.
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, city, password } = req.body;
    let errors: string[] = [];

    // validating each input with the validator library
    const validationSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "First name is invalid.",
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "Last name is invalid.",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "E-mail is invalid.",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "Phone number is invalid.",
      },
      {
        valid: validator.isLength(city, {
          min: 1,
        }),
        errorMessage: "City name is invalid.",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "Password is not strong enough.",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    // if there's any error show it
    if (errors.length) {
      return res.status(400).json({
        // always return the first error, if there's more the user will see it
        // next, once they fix the previous one
        errorMessage: errors[0],
      });
    }

    // check db to see if the email is already registered...
    const userWithEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    // and if it is, throw an error
    if (userWithEmail) {
      return res.status(400).json({
        errorMessage: "This e-mail is already associated with another account.",
      });
    }

    // it's important (like a MUST do thing) to encrypt passwords before storing
    // them in our db and one way of doing it is by using a "hash" algorithm,
    // here we're hashing and "salting" the password (extra layer of security)
    // with +10 characters
    const hashedPassword = await bcrypt.hash(password, 10);

    // creating new user
    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        password: hashedPassword,
        // since the key and the value have the same name we don't need to
        // repeate it.
        email,
        phone,
        city,
      },
    });

    // this is the type of the algorithm we're going to send with the JWT
    // the variable must be called "alg"
    const alg = "HS256";
    // this is the "secret" part of the JWT and only our server is aware of,
    // it's in the .env file
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new jose.SignJWT({
      email: user.email,
    })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);

    return res.status(200).json({
      token,
    });
  }

  // if the HTTP verb is not POST return this
  return res.status(404).json("Unknown endpoint");
}
