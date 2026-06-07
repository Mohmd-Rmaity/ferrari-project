import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Scuderia Ferrari HP</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/drivers">Drivers</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/store">Store</Link>
        <Link to="/results">Results</Link>
        <Link to="/Membership">Membership</Link>
      </nav>
    </div>
  );
}

export default Navbar;