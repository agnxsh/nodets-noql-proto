import { DocumentDefinition } from "mongoose";
import { UserDocument } from "../models/user.model";
import UserModel from "../models/user.model";

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}
