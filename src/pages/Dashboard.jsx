// react-router-dom imports
import { useLoaderData } from "react-router-dom";

// components
import Intro from "../components/Intro";

// helper functions
import { fetchData } from "../helper";
import { toast } from "react-toastify";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

// action
export async function dashboardAction({request}) {
    const data = await request.formData();
    const formData = Object.fromEntries(data)
    try {
        localStorage.setItem("userName", JSON.stringify(formData.userName))
        return toast.success(`Welcome, ${formData.userName}`)
    } catch (err) {
        throw new Error("There was a problem creating your account.")
    }
}

const Dashboard = () => {
  const { userName } = useLoaderData();

  return (
    <>
      {userName ? <p>{userName}</p> : <Intro />}
      <p>Dashboard</p>
    </>
  );
};

export default Dashboard;
