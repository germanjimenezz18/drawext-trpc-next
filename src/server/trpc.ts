// src/server/trpc.ts
import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { sleep } from "@/lib/utils";
import { TLStoreSnapshot } from "tldraw";
import * as fs from "fs";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
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
        system:
          "You are a image recognition AI model, you should be able to recognize the image and tell me what it is. You always speak in Spanish",
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

  saveDocument: publicProcedure
    .input(
      z.object({
        document: z.custom<TLStoreSnapshot>(),
      })
    )
    .mutation(async ({ input }) => {
      // TODO: save in DB
      fs.writeFileSync("mock-db.json", JSON.stringify(input.document, null, 2));
      await sleep(1500); // Simular latencia

      console.log(input);
      return { success: true };
    }),

  getDocument: publicProcedure.query(async () => {
    // TODO: read from DB
    const data = fs.readFileSync("mock-db.json", "utf8");
    await sleep(1500); // Simular latencia
    return {
      success: true,
      document: {
        content: data,
      },
    };
  }),
});

export type AppRouter = typeof appRouter;
