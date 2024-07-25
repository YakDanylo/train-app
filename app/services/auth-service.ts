import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export async function signUp(email: string, password: string) {
  "use server";
  const response = await fetch(`${process.env.FETCH_API_URL}/auth/sign_up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const token = await signIn(email, password);
  return token;
}

export async function signIn(email: string, password: string) {
  "use server";
  const response = await fetch(`${process.env.FETCH_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  cookies().set("access_token", `Bearer ${data.access_token}`);
  cookies().set("refresh_token", `Refresh ${data.refresh_token}`);
  return data;
}

export async function refresh() {
  "use server";
  const res = await fetch(`${process.env.FETCH_API_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${cookies().get("refresh_token")?.value}`,
    },
  });
  const data = await res.json();
  return data?.access_token;
}
