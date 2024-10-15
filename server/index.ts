import { publicProcedure, router } from "./trpc";
import prisma from "@/lib/prisma";
import {z} from "zod"

export const appRouter = router({
  getPokemonDetails: publicProcedure.input(z.object({
    name : z.string()
  })).query( (opts) => {
    const {input} = opts;
   return prisma.pokemon.findFirst({
    where : {
      name : {
        equals :input.name ,
        mode : "insensitive"
      }
    }
   })
  }),
  getPokemonArray: publicProcedure.input(z.array(z.string())).query(async (opts) => {
    const { input } = opts;
    return prisma.pokemon.findMany({
      where: {
        name: {
          in: input,
          mode: "insensitive"
        }
      }
    });
  }),
  getPokemonByType: publicProcedure.input(z.object({
    type: z.string(),
  })).query((opts) => {
    const { input } = opts;
    return prisma.pokemon.findMany({
      where: {
        types: {
          has: input.type,
        },
      },
    });
  }),

  
  
});

export type AppRouter = typeof appRouter;