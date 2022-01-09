import React from "react";

export default function Categories({ items, onClick }) {
  return (
    <nav className="flex items-center list-none">
      {items.map((name) => (
        <li onClick={onClick} key={name}>
          {name}
        </li>
      ))}
    </nav>
  );
}
