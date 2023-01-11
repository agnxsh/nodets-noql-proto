import SessionModel from "../models/session.model";

export async function createSession(userId: String, userAgent: String) {
  const session = await SessionModel.create({ user: userId, userAgent });
  return session.toJSON();
}
