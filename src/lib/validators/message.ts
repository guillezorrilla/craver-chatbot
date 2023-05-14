import { z } from 'zod';

export const messageSchema = z.object({
  id: z.string(),
  isUserMessage: z.boolean(),
  text: z.string()
});

export const MessageArraySchema = z.array(messageSchema);

export type Message = z.infer<typeof messageSchema>;
