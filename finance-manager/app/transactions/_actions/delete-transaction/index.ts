"use server";

import { db } from "@/app/_lib/prisma";
import { DeleteTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

const deleteTransaction = async ({
  transactionId,
}: DeleteTransactionSchema) => {
  await db.transaction.delete({ where: { id: transactionId } });

  revalidatePath("/transactions");
  revalidatePath("/");
};

export default deleteTransaction;
