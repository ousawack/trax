import {NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/", "/playlist", "/library"]
};

export default function middleware(req: NextRequest) {
    const token = req.cookies.get("TRAX_ACCESS_TOKEN");

    console.log("middleware.ts");
    console.log("Token:", token);

    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
}