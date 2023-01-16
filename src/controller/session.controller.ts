import { Request, Response } from "express";
import { validateUserPassword } from "../services/user.service";
import { createSession } from "../services/session.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config";

export async function createUserSessionHadler(req: Request, res: Response) {
  //validate the user's password
  const user = await validateUserPassword(req.body);
  if (!user) {
    return res.status(401).send("Invalid User or Password");
  }

  //create a User Session
  const session = await createSession(user._id, req.get("user-agent") || "");

  //create an access token
  const accessToken = signJwt(
    {
      ...user,
      session: session._id,
    },
    {
      expiresIn: config.get("accessTokenTTL"),
    }
  );

  //create a refresh token
  const refreshToken = signJwt(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get("refreshTokenTTL") }
  );

  //return access & refresh token
  return res.send({
    accessToken,
    refreshToken,
  });
}
