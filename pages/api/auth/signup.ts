// these are special Next.js types that we can use on params
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";

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

    res.status(200).json({
      hello: "there",
    });
  }
}
