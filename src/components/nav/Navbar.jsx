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
            <a href="../Auction.jsx">Auctions </a>
          </li>
          <li>
            <a href="#!">Blog </a>
          </li>

          <li>
            <a href="#!">NFTs </a>
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
