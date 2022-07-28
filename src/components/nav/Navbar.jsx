import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="d-flex ">
        <a href="#!" className="Logo">
          NFT
        </a>
        <ul>
          <li>
            <a href="#!">Home </a>
          </li>
          <li>
            <a href="#!">Discover </a>
          </li>
          <li>
            <a href="#!">Auctions </a>
          </li>
          <li>
            <a href="#!"> Partner</a>
          </li>

          <li>
            <a href="#!">Trailer </a>
          </li>
        </ul>
        <a href="#!" className="Number">
          +998 94 404 56 40
        </a>
      </ul>
    </div>
  );
}
export default Navbar;
