import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthServices";

type Role = keyof typeof roleBasedPrivetRoutes;

const roleBasedPrivetRoutes = {
  user: [/^\/user/, "create-shop"],
  admin: [/^\/admin/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userInfo = await getCurrentUser();
  if (!userInfo) {
    return NextResponse.redirect(
      `http://localhost:3000/login?redirectPath=${pathname}`
    );
  }
  if (userInfo.role && roleBasedPrivetRoutes[userInfo.role as Role]) {
    const routes = roleBasedPrivetRoutes[userInfo.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", request.url));
  }
};

export const config = {
  matcher: ["/create-shop", "/user", "/user/:page", "/admin", "/admin/:page"],
};
