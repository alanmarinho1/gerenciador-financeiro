import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { Circle } from "lucide-react";


interface TransactionTypeBadgeProps {
    transaction: Transaction
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
    if (transaction.type === TransactionType.DEPOSIT) {
        return (
          <Badge className="gap-2 bg-muted font-bold text-primary hover:bg-muted">
            <Circle className="fill-primary" size={10} />
            Deposito
          </Badge>
        );
      }
      if (transaction.type === TransactionType.EXPENSE) {
        return (
          <Badge className="text-danger bg-danger hover:bg-danger gap-2 bg-opacity-10 font-bold hover:bg-opacity-10">
            <Circle className="fill-danger" size={10} />
            Saque
          </Badge>
        );
      }
      if (transaction.type === TransactionType.INVESTMENT) {
        return (
          <Badge className="gap-2 bg-white bg-opacity-10 font-bold text-white hover:bg-white hover:bg-opacity-10">
            <Circle className="fill-white" size={10} />
            Investimento
          </Badge>
        );
      }
}
 
export default TransactionTypeBadge;