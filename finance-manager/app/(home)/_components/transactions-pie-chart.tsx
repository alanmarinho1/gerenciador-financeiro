"use client";

import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUp,
  TrendingUpIcon,
} from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { MONTH_OPTIONS } from "../../_constants/month";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import PercentageItem from "./percentage-item";

// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ];

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investimento",
    color: "#FFFFFF",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesa",
    color: "#E93030",
  },
  [TransactionType.DEPOSIT]: {
    label: "Depósito",
    color: "#55B02E",
  },
} satisfies ChartConfig;

interface TransactionPieChartProps {
  typesPercentage: TransactionPercentagePerType;
  month: string;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const TransactionPieChart = ({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  month,
  typesPercentage,
}: TransactionPieChartProps) => {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: chartConfig[TransactionType.DEPOSIT].color,
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: chartConfig[TransactionType.INVESTMENT].color,
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: chartConfig[TransactionType.EXPENSE].color,
    },
  ];

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gráfico de transações</CardTitle>
        <CardDescription>
          {MONTH_OPTIONS.find((option) => option.value === month)?.label}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-10">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-2">
          <PercentageItem
            icon={<TrendingUpIcon size={16} className="text-primary" />}
            title="Receita"
            amount={typesPercentage[TransactionType.DEPOSIT]}
          />

          <PercentageItem
            icon={<TrendingDownIcon size={16} className="text-red-500" />}
            title="Despesas"
            amount={typesPercentage[TransactionType.EXPENSE]}
          />
          <PercentageItem
            icon={<PiggyBankIcon size={16} className="text-yellow-500" />}
            title="Investido"
            amount={typesPercentage[TransactionType.INVESTMENT]}
          />
        </div>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
};

export default TransactionPieChart;
