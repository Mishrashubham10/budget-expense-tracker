// react-router-dom imports
import { Form, NavLink } from "react-router-dom";

// library
import { TrashIcon } from '@heroicons/react/24/solid'

// assets
import logomark from "../assets/logomark.svg";

const Navbar = ({ userName }) => {
  const onSubmit = (e) => {
    if (!confirm("Delete user and all data?")) {
      e.preventDefault();
    }
  };

  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} height={30} alt="" />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form method="post" action="/logout" onSubmit={onSubmit}>
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Navbar;
