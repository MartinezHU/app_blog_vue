import type { JwtPayload } from "jwt-decode";

export interface JWTPayload extends JwtPayload {
  is_staff?: boolean;
}
