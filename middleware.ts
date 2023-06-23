/**
 * this file and the function MUST be called "middleware", so Next can recognize it.
 *
 * this file contains the logic to check the token that the user will send us
 * via an HTTP request (for protected routes), we could write the same logic
 * for different protected routes, if that was the case, but that wouldn't be DRY,
 * so that's why we created this separated file instead of writing it in the "me.ts".
 */

// special types from Next.js
import { NextRequest, NextResponse } from "next/server";

import * as jose from "jose";

export async function middleware(req: NextRequest, res: NextResponse) {
  const bearerToken = req.headers.get("authorization") as string;

  if (!bearerToken) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized request" }),
      { status: 401 }
    );
  }

  /**
   * when we make an HTTP request in this case, we need to pass a key/value pair
   * to the header and the value for the token by convention is "Bearer [token here]",
   * that's why we need to split it to get the token
   */
  const token = bearerToken.split(" ")[1];

  if (!token) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized request" }),
      { status: 401 }
    );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized request" }),
      { status: 401 }
    );
  }
}

/**
 * by default this middleware ALWAYS run BEFORE the endpoints/pages,
 * so what we did here was to call it only on the "me" endpoint and we
 * could add more endpoints to the array if we wanted to.
 */
export const config = {
  matcher: ["/api/auth/me"],
};
