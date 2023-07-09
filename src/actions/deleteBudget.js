// rrd imports
import { redirect } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// helper functions
import { deleteItem, getAllMatchingItems } from "../helper";

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });

    toast.success("Budget deleted successfully!");
  } catch (err) {
    throw new Error("There was a problem deleting your budget.");
  }

  return redirect("/");
}
