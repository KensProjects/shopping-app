import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const cartRouter = createTRPCRouter({

  increaseCartItemQuantity: protectedProcedure
    .input(z.object({ name: z.string(), price: z.number(), imageSrc: z.string() }))
    .mutation(async ({ ctx, input }) => {

      return ctx.db.cartItem.upsert({

        where: {
          name: input.name
        },
        update: {
          quantity: { increment: 1 }
        },
        create: {
          name: input.name,
          price: input.price,
          imageSrc: input.imageSrc,
          createdBy: {
            connect: { id: ctx.session.user.id }
          }
        }
      })
    }),
  decreaseCartItemQuantity: protectedProcedure
    .input(z.object({ name: z.string(), quantity: z.number() }))
    .mutation(async ({ ctx, input }) => {

      const itemQuantityAtOne = (input.quantity === 1)

      if (itemQuantityAtOne) {
        return ctx.db.cartItem.delete({
          where: {
            name: input.name
          }
        })
      } else {
        return ctx.db.cartItem.update({

          where: {
            name: input.name
          },
          data: {
            quantity: { decrement: 1 }
          }
        })
      }

    }),
  deleteCartItem: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.cartItem.delete({

        where: {
          name: input.name
        },

      })
    }),
  getCart: protectedProcedure.query(async ({ ctx }) => {

    return ctx.db.cartItem.findMany({
      where: { createdById: ctx.session.user.id },
    });
  }),
})