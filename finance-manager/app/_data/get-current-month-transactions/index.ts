import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { endOfMonth, startOfMonth } from "date-fns";

export const getCurrentMonthTransactions = async () => {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized");
    }
    return await db.transaction.count({
        where: {
          userId: userId,
          createdAt: {
            gte: startOfMonth(new Date()),
            lte: endOfMonth(new Date()),
          },
        },
      });
}
 
export default getCurrentMonthTransactions;