import { createTRPCReact } from '@trpc/react-query';
import { AppRouter } from '@/server/trpc';

// client side trpc instance
export const trpc = createTRPCReact<AppRouter>();