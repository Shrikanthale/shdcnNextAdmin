// communication between client and server

import { AppRouter } from ".";
import { createTRPCReact } from "@trpc/react-query";


export const trpc = createTRPCReact<AppRouter>({})
