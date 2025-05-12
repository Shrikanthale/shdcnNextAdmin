import { userRouter } from "./routers/user";
import { procedure, router } from "./trpc";
import { z } from "zod";
export const appRouter = router({
   user : userRouter,
})

export type AppRouter = typeof appRouter;
