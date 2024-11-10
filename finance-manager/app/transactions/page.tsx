import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";
import { DataTable } from "../_components/ui/data-table";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const TransactionsPage = async () => {
  const { userId } = await auth();
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  if (!userId) {
    redirect("/login");
  }
  return (
    <div>
      <Navbar />
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      {transactions.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          <p>Não há dados disponíveis no momento.</p>
        </div>
      ) : (
        <DataTable columns={transactionColumns} data={transactions} />
      )}
      {/* <DataTable columns={transactionColumns} data={transactions} /> */}
    </div>
  );
};

export default TransactionsPage;
