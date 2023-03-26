// middleware.ts
import { NextResponse } from "next/server";
import Cookies from "js-cookie";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  const token = Cookies.get("token");
  const userId = Cookies.get("userid");

  requestHeaders.set("userid", userId);
  requestHeaders.set("Authorization", token);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
