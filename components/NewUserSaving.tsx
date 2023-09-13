import { FinancialActivityType } from "@models/FinancialActivityType";
import { IoCaretDown } from "react-icons/io5";
import DatePicker from "react-datepicker";
import RemoveFinancialActivity from "./RemoveFinancialActivity";
import {
  FinancialActivity,
  PlaceholderFinancialActivity,
} from "@models/FinancialActivity";
import { useUserStore } from "@store/User";
import { Frequency } from "@models/Frequency";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";


function NewUserFinancialActivity({
  deleteEnabled = false,
}: {
  deleteEnabled?: boolean;
}) {
  const [financialActivity, setFinancialActivity] =
    useState<FinancialActivity>();

  return (
    
}

export default NewUserFinancialActivity;
