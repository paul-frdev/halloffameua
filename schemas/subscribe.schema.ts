import { ZodType, z } from "zod";

export type UserSubscribeProps = {
  fullname: string;
  email: string;
};

export const userSubscribeSchema: ZodType<UserSubscribeProps> = z.object({
  fullname: z.string().min(4, { message: "your full name must be atleast 4 characters long" }),
  email: z.string().email({ message: "You did not enter a valid email" }),
});
