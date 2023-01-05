import { z } from "zod";
export const constUserSchema = z.object({
  body: z
    .object({
      name: z.string({
        required_error: "Name is required!",
      }),
      password: z
        .string({
          required_error: "Password is required!",
        })
        .min(6, "Password is too short -- should be atleast 6 chars minimum"),
      passwordConfirmation: z.string({
        required_error: "passwordConfirmation is required",
      }),
      email: z
        .string({
          required_error: "Email is required",
        })
        .email("Not a valid email"),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: "Passwords do not match!",
      path: ["passwordConfirmation"],
    }),
});
