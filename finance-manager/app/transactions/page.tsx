import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";
import { DataTable } from "../_components/ui/data-table";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import canUserAddTransaction from "../_data/can-user-add-transaction";
import { ScrollArea } from "../_components/ui/scroll-area";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
    orderBy: {
      date: "desc",
    },
  });

  if (!userId) {
    redirect("/login");
  }
  const userCanAddTransaction = await canUserAddTransaction();
  return (
    <div>
      <Navbar />
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
      </div>
      {transactions.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          <p>Não há dados disponíveis no momento.</p>
        </div>
      ) : (
        <ScrollArea className="h-[calc(103vh-200px)]">
          <DataTable
            columns={transactionColumns}
            data={JSON.parse(JSON.stringify(transactions))}
          />
        </ScrollArea>
      )}
    </div>
  );
};

export default TransactionsPage;
