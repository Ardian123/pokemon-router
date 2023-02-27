import { Outlet, NavLink } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque
        sint, temporibus quod incidunt odio sapiente dolore alias eligendi id
        dignissimos ut quae itaque.
      </p>

      <nav>
        <ul>
          <li>
            <NavLink className="nav__link" to="faq">
              FAQ
            </NavLink>
            <NavLink className="nav__link" to="contact">
              Contact us
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
