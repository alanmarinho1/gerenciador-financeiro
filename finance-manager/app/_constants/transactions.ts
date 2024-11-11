import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_TYPE_OPTIONS = [
  { value: TransactionType.DEPOSIT, label: "Depósito" },
  { value: TransactionType.EXPENSE, label: "Despesa" },
  { value: TransactionType.INVESTMENT, label: "Investimento" },
];

export const PAYMENT_METHOD_OPTIONS = [
  { value: TransactionPaymentMethod.CASH, label: "Dinheiro" },
  { value: TransactionPaymentMethod.CREDIT_CARD, label: "Cartão de crédito" },
  { value: TransactionPaymentMethod.DEBIT_CARD, label: "Cartão de debito" },
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label: "Transferência bancária",
  },
  { value: TransactionPaymentMethod.PAYPAL, label: "PayPal" },
  { value: TransactionPaymentMethod.APPLE_PAY, label: "Apple Pay" },
  { value: TransactionPaymentMethod.GOOGLE_PAY, label: "Google Pay" },
  { value: TransactionPaymentMethod.OTHER, label: "Outro" },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  { value: TransactionCategory.HOUSING, label: "Aluguel" },
  { value: TransactionCategory.FOOD, label: "Alimentação" },
  { value: TransactionCategory.TRANSPORTATION, label: "Transporte" },
  { value: TransactionCategory.EDUCATION, label: "Educação" },
  { value: TransactionCategory.ENTERTAINMENT, label: "Lazer" },
  { value: TransactionCategory.HEALTH, label: "Saude" },
  { value: TransactionCategory.SALARY, label: "Salário" },
  { value: TransactionCategory.OTHER, label: "Outro" },
  { value: TransactionCategory.UTILITY, label: "Utilidade" },
];

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.CASH]: "money.svg",
  [TransactionPaymentMethod.CREDIT_CARD]: "card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "card.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionPaymentMethod.PAYPAL]: "paypal.svg",
  [TransactionPaymentMethod.APPLE_PAY]: "apple.svg",
  [TransactionPaymentMethod.GOOGLE_PAY]: "google.svg",
  [TransactionPaymentMethod.OTHER]: "bill.svg",
};
