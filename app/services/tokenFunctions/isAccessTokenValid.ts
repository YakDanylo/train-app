import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export default async function isAccessTokenValid() {
  const access_token = cookies().get("access_token")?.value.split(" ")[1];
  try {
    const response = await jwtVerify(
      access_token!,
      new TextEncoder().encode(process.env.JWT_TOKEN_SECRET)
    );
    return true;
  } catch {
    return false;
  }
}
