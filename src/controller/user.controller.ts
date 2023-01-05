import { Request, Response } from "express";
import logger from "../utils/logger";
import { createUser } from "../services/user.service";
export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return user;
  } catch (e) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
