// react-router-dom imports
import { Outlet, useLoaderData } from "react-router-dom";

// assets
import wave from '../assets/wave.svg'

// helper functions
import { fetchData } from "../helper";

// components
import Navbar from "../components/Navbar";

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Navbar userName={userName} />
      <main>
      <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
