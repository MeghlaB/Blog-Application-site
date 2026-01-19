import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.services";
import { Role } from "./app/constants/role";

export async function proxy(request: NextRequest) {

   const pathName = request.nextUrl.pathname

  let isAuthenticated = false;
  let isAdmin = false;

  const { data } = await userService.getSession()
  if (data) {
    isAuthenticated = true;
    isAdmin = data.user.role === Role.admin
  }
    //* User in not authenticated at all

  if (!isAuthenticated) {
     return NextResponse.redirect(
      new URL("/auth/login", request.url)
    );
  }
    //* User is authenticated and role = ADMIN
  //* User can not visit user dashboard
 if(isAdmin && pathName.startsWith("/dashboard")){
   return NextResponse.redirect(
      new URL("/admin-dashboard", request.url)
    );
 }
   //* User is authenticated and role = USER
  //* User can not visit admin-dashboard
    if (!isAdmin && pathName.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }



  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard",
     "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*"
  ]

}
