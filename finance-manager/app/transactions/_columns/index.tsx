"use client";

import {
  Transaction,
  TransactionCategory,
  TransactionPaymentMethod,
} from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";
import EditTransactionButton from "../_components/edit-transaction-button";
import DeleteTransactionButton from "../_components/delete-transaction-button";

const transactionCategoryMap = {
  [TransactionCategory.HOUSING]: "Aluguel",
  [TransactionCategory.FOOD]: "Alimentação", // changed from "Comida" to "Alimentação"
  [TransactionCategory.TRANSPORTATION]: "Transporte",
  [TransactionCategory.EDUCATION]: "Educação",
  [TransactionCategory.ENTERTAINMENT]: "Lazer",
  [TransactionCategory.HEALTH]: "Saúde",
  [TransactionCategory.SALARY]: "Salário",
  [TransactionCategory.OTHER]: "Outro",
  [TransactionCategory.UTILITY]: "Utilidade",
};

const transactionMethodMap = {
  [TransactionPaymentMethod.CASH]: "Dinheiro",
  [TransactionPaymentMethod.CREDIT_CARD]: "Cartão de crédito",
  [TransactionPaymentMethod.DEBIT_CARD]: "Cartão de debito",
  [TransactionPaymentMethod.BANK_TRANSFER]: "Transferência bancária",
  [TransactionPaymentMethod.OTHER]: "Outro",
  [TransactionPaymentMethod.PAYPAL]: "PayPal",
  [TransactionPaymentMethod.GOOGLE_PAY]: "Google Pay",
  [TransactionPaymentMethod.APPLE_PAY]: "Apple Pay",
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      transactionCategoryMap[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
    cell: ({ row: { original: transaction } }) =>
      transactionMethodMap[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: transaction } }) => {
      return (
        <div className="space-x-1">
          <EditTransactionButton transaction={transaction} />
          <DeleteTransactionButton transactionId={transaction.id} />
        </div>
      );
    },
  },
];
