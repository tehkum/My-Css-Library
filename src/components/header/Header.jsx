import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const submitHandler = () => {
    const comp = value[0].toUpperCase() + value.slice(1);
    navigate(`/${comp}`);
  };

  return (
    <header>
      <h1>CSS Library</h1>
      <span className="search-field">
        <input
          list="page-search"
          type="search"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
        />
        <datalist id="page-search">
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
            <option value={`${items}`}>{items}</option>
          ))}
        </datalist>
        <button onClick={submitHandler}>Search</button>
      </span>
      <span>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/components">
          Components
        </NavLink>
      </span>
    </header>
  );
}
