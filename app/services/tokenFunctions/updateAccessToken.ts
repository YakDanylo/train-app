import { NextRequest } from "next/server";
import RefreshToken from "../../components/RefreshToken";

export default async function updateAccessToken(req: NextRequest) {
  const token = await RefreshToken(req);
  return token;
}
