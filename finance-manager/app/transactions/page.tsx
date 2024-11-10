import { ArrowUpDown } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { Transaction } from "@prisma/client";
import { transactionColumns } from "./_columns";
import { DataTable } from "../_components/ui/data-table";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div>
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full font-bold">
          Adicionar transação
          <ArrowUpDown />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
