import { Request, Response } from "express";
import logger from "../utils/logger";
export function createUserHandler(req: Request, res: Response) {
  try {
    //const user = await "will call the createUser service"
  } catch (e) {
    logger.error(e);
    return res.status(409).send();
  }
}
