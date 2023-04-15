import z from 'zod'

const userSchema = z.object({
  id: z.string().min(1).max(50),
  name: z.string().min(5).max(50),
  // name: z.number().min(18).max(99),
  // email: z.string().email(),
});

export default userSchema;
