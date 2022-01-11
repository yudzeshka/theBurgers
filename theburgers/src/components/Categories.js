import React from "react";
import { Link } from "react-router-dom";

export default function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = React.useState(null);
  return (
    <nav className="flex items-center list-none">
      {items &&
        items.map((name, index) => (
          <li
            className={activeItem === index ? "active" : null}
            onClick={() => setActiveItem(index)}
            key={name}
          >
            <Link to={name}>{name}</Link>
          </li>
        ))}
    </nav>
  );
}
