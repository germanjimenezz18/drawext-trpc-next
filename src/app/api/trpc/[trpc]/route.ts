// src/app/api/trpc/[trpc]/route.ts
import { appRouter } from '@/server/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export const GET = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  });

export const POST = GET;