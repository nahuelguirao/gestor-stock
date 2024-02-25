import { Link } from "react-router-dom";
import "../styles/header.css";

export function Header() {
  return (
    <header>
      <h1>
        Stock <span className="headerSpan">Manager</span>
      </h1>
      <nav>
        <Link to={"/"}>Products</Link>
        <Link to={"/categories"}>Categories</Link>
      </nav>
    </header>
  );
}
