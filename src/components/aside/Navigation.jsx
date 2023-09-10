import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Navigation() {
  return (
    <aside>
      <h2>Components</h2>
      {[
        "Avatar",
        "Alert",
        "Badge",
        "Button",
        "Card",
        "Heading",
        "Text",
        "Image"
      ].map((items) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-item nav-item-active " : "nav-item"
          }
          to={`/${items}`}
        >
          {items}
        </NavLink>
      ))}
      {/* <NavLink className="nav-item">Avatar</NavLink>
      <NavLink className="nav-item">Alert</NavLink>
      <NavLink className="nav-item">Badge</NavLink>
      <NavLink className="nav-item">Button</NavLink>
      <NavLink className="nav-item">Card</NavLink>
      <NavLink className="nav-item">Heading</NavLink>
      <NavLink className="nav-item">Text</NavLink>
      <NavLink className="nav-item">Image</NavLink> */}
    </aside>
  );
}
