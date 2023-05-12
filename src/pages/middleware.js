import { NextResponse } from "next/server";

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);

  // Check if running in the browser environment
  if (typeof window !== "undefined") {
    const Cookies = require("js-cookie");
    const token = Cookies.get("token");
    const userId = Cookies.get("userid");

    requestHeaders.set("userid", userId);
    requestHeaders.set("Authorization", token);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
