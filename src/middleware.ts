import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthServices";

type Role = keyof typeof roleBasedPrivetRoutes;

const roleBasedPrivetRoutes = {
  user: [/^\/user/],
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
  }
};

export const config = {
  matcher: ["/create-shop"],
};
