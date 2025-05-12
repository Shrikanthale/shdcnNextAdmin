import { procedure, router } from "../trpc";
import { z } from "zod";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export const userRouter = router({
    getUsers : procedure.query(async () => {
        // return [
        //     {
        //        name : "joe",
        //       surname : "tribiani"
        //     },
        //     {
        //         name : "monica chandler",
        //         surname : "bing"
        //     }
        // ]
        return await prisma.user.findMany()
    }),

    addUser : procedure.input(z.object({
        name : z.string(),
        surname : z.string()
    })).mutation(async (opts)=>{
        const {input} = opts
        //  call prisma
        return await prisma.user.create({
            data : {
                name : input.name,
                surname : input.surname
            }
        })
    }),

    deleteUser : procedure.input(z.object({
        id : z.number()
    })).mutation(async (opts)=>{
        const {input} = opts
        return await prisma.user.delete({
            where : {id : input.id}
        })
    }),

    updateUser : procedure.input(z.object({
        id : z.number(),
        name : z.string(),
        surname : z.string()
    })).mutation(async (opts)=>{
        const {input} = opts
        return await prisma.user.update({
            where : {id : input.id},
            data : {
                name : input.name,
                surname : input.surname
            }
        })
    })      
})

