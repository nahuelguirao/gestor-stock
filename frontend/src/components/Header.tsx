import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";

export function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <h1 onClick={() => navigate("/")}>
        Stock <span className="headerSpan">Manager</span>
      </h1>
      <nav>
        <Link to={"/"}>Products</Link>
        <Link to={"/categories"}>Categories</Link>
      </nav>
    </header>
  );
}
