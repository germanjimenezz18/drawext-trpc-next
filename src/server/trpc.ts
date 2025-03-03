// src/server/trpc.ts
import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return { greeting: `Hola, esto funciona!` };
  }),
  completion: publicProcedure
    .input(
      z.object({
        apiKey: z.string(),
        image: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { apiKey, image } = input;
      const openai = createOpenAI({ apiKey, compatibility: "strict" });

      const { text, usage } = await generateText({
        model: openai("gpt-4-turbo"),
        maxTokens: 512,
        system: "You are a image recognition AI model, you should be able to recognize the image and tell me what it is. You always speak in Spanish",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Analyse the image and tell me what you think it is in Spanish.",
              },
              {
                type: "image",
                image: new URL(image),
              },
            ],
          },
        ],
      });

      return { text, usage };
    }),
});

export type AppRouter = typeof appRouter;
