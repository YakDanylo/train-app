import { NextRequest, NextResponse } from "next/server";
import isAccessTokenValid from "./app/services/tokenFunctions/isAccessTokenValid";
import isRefreshTokenValid from "./app/services/tokenFunctions/isRefreshTokenValid";
import updateAccessToken from "./app/services/tokenFunctions/updateAccessToken";

export default async function middleware(req: NextRequest) {
  const url = req.url;
  const isTokenValid = await isAccessTokenValid();
  const isRefTokenValid = await isRefreshTokenValid();
  if (!isTokenValid && isRefTokenValid) {
    return await updateAccessToken(req);
  } else if (url.includes("/schedule") && !isTokenValid) {
    return NextResponse.redirect("http://localhost:3000/sign-in");
  } else {
    return await updateAccessToken(req);
  }
}
