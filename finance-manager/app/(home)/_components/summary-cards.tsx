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
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  userCanAddTransaction: boolean;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  userCanAddTransaction
}: SummaryCards) => {
  return (
    <div className="space-y-6">
      <SummaryCard
        title="Saldo"
        icon={<WalletIcon size={16} />}
        amount={balance}
        size="lg"
        userCanAddTransaction={userCanAddTransaction}
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
