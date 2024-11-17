import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import { DialogFooter } from "@/app/_components/ui/dialog";
import { TrashIcon } from "lucide-react";
import deleteTransaction from "../_actions/delete-transaction";
import { toast } from "sonner";

interface DeleteTransactionButtonProps {
  transactionId: string;
}
const DeleteTransactionButton = ({
  transactionId,
}: DeleteTransactionButtonProps) => {
  const handleDeleteTransaction = async () => {
    try {
      await deleteTransaction({ transactionId });
      toast.success("Transação deletada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao deletar a transação");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Você deseja realmente deletar esta transação?
          </AlertDialogTitle>
          <AlertDialogDescription>
            {" "}
            Essa ação não pode ser desfeita
          </AlertDialogDescription>
        </AlertDialogHeader>
        <DialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteTransaction}>
            Continuar
          </AlertDialogAction>
        </DialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTransactionButton;
