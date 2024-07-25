import { cookies } from "next/headers";
import { refresh } from "../services/auth-service";
import { NextRequest, NextResponse } from "next/server";

export default async function RefreshToken(req: NextRequest) {
  const resp = await refresh();
  const response = NextResponse.next();

  if (resp) {
    response.cookies.set("access_token", `Bearer ${resp}`, { httpOnly: true });
  }
  return response;
}
