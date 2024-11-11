import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";

interface SummaryCardProps {
  title: string;
  icon: React.ReactNode;
  amount: number;
  size?: "sm" | "lg";
}
const SummaryCard = ({
  title,
  icon,
  amount,
  size = "sm",
}: SummaryCardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={`${size === "sm" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className={`font-bold ${size === "sm" ? "text-2xl" : "text-4xl"}`}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>
        {size === "lg" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
