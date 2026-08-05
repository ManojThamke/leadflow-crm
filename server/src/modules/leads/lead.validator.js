import { z } from "zod";

export const createLeadSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().optional(),
  email: z.email(),
  phone: z.string().min(10),
  company: z.string().optional(),
  remarks: z.string().optional(),
});