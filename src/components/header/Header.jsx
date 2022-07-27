import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="title">
        <h1>
          Discover a New Era <br /> of Crypto Currency
        </h1>
        <p>
          Panda NFT is the marketplace for NFT, which are digital items you can
          truly own. Digital items lorem have existed for a long time, but never
          like this.
        </p>
        <button>Get Started</button>
      </div>
      <div className="titleImg">
        <img src="/images/nft-hero.png" alt="" />
        <div className="titleInfo">
          <h2>
            "nft monkey"<strong>2 mln $</strong>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
