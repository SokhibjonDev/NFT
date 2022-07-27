import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="/src/components/header/Header.js" className="Logo">NFT</a>
      <ul>
        <li><a href="/src/components/header/Header.js">Home </a></li>
        <li><a href="#!">Discover </a></li>
        <li><a href="#!">Blog </a></li>
        <li><a href="#!">Auctions </a></li>
        <li><a href="#!">NFTs </a></li>
      </ul>
        <a href="#!" className="Number">+998 94 404 56 40</a>
    </div >
  );
}

export default Navbar;
