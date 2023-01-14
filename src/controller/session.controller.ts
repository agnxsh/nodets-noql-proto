import { Request, Response } from "express";
import { validateUserPassword } from "../services/user.service";
import { createSession } from "../services/session.service";
import { Jwt } from "jsonwebtoken";
export async function createUserSessionHadler(req: Request, res: Response) {
  //validate the user's password
  const user = await validateUserPassword(req.body);
  if (!user) {
    return res.status(401).send("Invalid User or Password");
  }

  //create a User Session
  const session = createSession(user._id, req.get("user-agent") || "");

  //create an access token
}
