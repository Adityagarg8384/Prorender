import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth((req) => {
  const isLoggedin = !!req.auth;
  // console.log(isLoggedin);
  const { nextUrl } = req;
  const currentRoute = nextUrl.pathname;

  const loginRoute = "/login";
  const signupRoute = "/signup";
  const apiPrefix = "/api";
  const dashboardRoute = "/dashboard";
  const publicApiRoutes = ["/api/auth/login", "/api/auth/signup"];
  const privateRoutes = [
    "/dashboard",
    "/medical-recomendation",
    "/lifestyle-analyser",
    "/ai-powered-diagnosis",
  ];

  if (nextUrl.pathname.startsWith(apiPrefix)) {
    if (publicApiRoutes.includes(currentRoute)) {
      return null;
    }
    if (!isLoggedin) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    return null;
  }

  if (privateRoutes.includes(currentRoute)) {
    // console.log(currentRoute);
    if (isLoggedin) {
      return null;
    }
    return Response.redirect(new URL(loginRoute, nextUrl));
  }
  if (
    isLoggedin &&
    (currentRoute.startsWith(loginRoute) ||
      currentRoute.startsWith(signupRoute))
  ) {
    return Response.redirect(new URL(dashboardRoute, nextUrl));
  }

  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
