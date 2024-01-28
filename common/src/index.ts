import { z } from "zod";

export const loginInput = z.object({
    username: z.string(),
    password: z.string(),
});

export  type LoginParams = z.infer<typeof loginInput>;








