import { procedure, router } from "../trpc";
import { z } from "zod";
export const userRouter = router({
    getUsers : procedure.query(() => {
        return [
            {
               name : "joe",
              surname : "tribiani"
            },
            {
                name : "monica chandler",
                surname : "bing"
            }
        ]
    }),

    addUser : procedure.input(z.object({
        name : z.string(),
        surname : z.string()
    })).mutation((opts)=>{
        const {input} = opts
        //  call prisma
    })
})

