import { getToken } from "next-auth/jwt";
import  { type NextRequest, NextResponse } from "next/server";
import { env } from "~/env.mjs";

export async function middleware(req: NextRequest) {

    function setPath(path:string) {
        return req.nextUrl.pathname.startsWith(path)
    }

    const activeSession = await getToken({ req: req, secret: env.NEXTAUTH_SECRET })

    const catalogRoute = setPath("/catalog")
    const itemRoute = setPath("/catalog/:item")
    const cartRoute = setPath("/cart")
    const accountRoute = setPath("/account")
    const signinRoute = setPath("/api/auth/signin")
    const signoutRoute = setPath("/api/auth/signout")

    const goingToProtectedPage = (cartRoute || catalogRoute || itemRoute || accountRoute || signoutRoute)

    if (!activeSession && goingToProtectedPage) {
        return NextResponse.redirect("/")
    }
    if (activeSession && signinRoute) {
        return NextResponse.redirect("/")
    }

    return NextResponse.next()
}