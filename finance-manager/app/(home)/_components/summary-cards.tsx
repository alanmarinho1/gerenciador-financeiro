import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "@/app/_lib/prisma";

interface SummaryCards {
  month: string;
}

const SummaryCards = async ({ month }: SummaryCards) => {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          ...where,
          type: "DEPOSIT",
        },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  );
  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;
  return (
    <div className="space-y-6">
      <SummaryCard
        title="Saldo"
        icon={<WalletIcon size={16} />}
        amount={balance}
        size="lg"
      />
      {/* OUTROS CARDS */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          title="Investimentos"
          icon={<PiggyBankIcon size={16} className="text-yellow-500" />}
          amount={investmentsTotal}
        />
        <SummaryCard
          title="Receita"
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          amount={depositsTotal}
        />
        <SummaryCard
          title="Despesas"
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
