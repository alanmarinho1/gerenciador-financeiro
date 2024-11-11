"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { MONTH_OPTIONS } from "../../_constants/month";


const TimeSelect = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [selectedMonth, setSelectedMonth] = useState(searchParams.get("month"));
  const handleMonthChange = (month: string) => {
    push(`/?month=${month}`);
  };
  return (
    <Select onValueChange={handleMonthChange} defaultValue={selectedMonth ?? ''}>
      <SelectTrigger className="w-[160px] rounded-full">
        <SelectValue placeholder="Selecione um mês" />
      </SelectTrigger>
      <SelectContent>
        {MONTH_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value.toString()}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TimeSelect;
