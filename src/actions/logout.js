// rrd imports
import { redirect } from "react-router-dom";

// helpers
import { deleteItem } from "../helper";

// library
import { toast } from "react-toastify";

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: "userName"
  })
  deleteItem({
    key: "budgets"
  })
  deleteItem({
    key: "expenses"
  })
  toast.success("You've deleted your account!")

  // redirect home
  return redirect("/");
}
