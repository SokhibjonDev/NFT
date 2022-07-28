import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/nav/Navbar";
import Header from "./components/header/Header";
import Discover from "./components/discover/Discover";
import Auction from "./components/auction/Auction";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className="container">
      <Header />
      <h1 className="discoverTitle">
        Create And Sell Your <br /> NFT's
      </h1>
      <div className="discovers">
        <Discover
          title="Set up your wallet"
          info="Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner."
        />
        <Discover
          title="Add your NFTs"
          info="Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner."
        />
        <Discover
          title="List them for sale"
          info="Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner."
        />
      </div>
      <div className="auctionTitle">
        <h1>Live Auction</h1>
        <button>View More</button>
      </div>
      <div className="auctions">
        <Auction
          img="/images/nft-hero.png"
          title="CryptoPunks"
          paragraph="2M $ "
          button="Buy"
        />
        <Auction
          img="/images/nft-hero-2.svg"
          title="Doodles"
          paragraph="2.000 $ "
          button="Buy"
        />
        <Auction
          img="/images/nft-hero-3.svg"
          title="Bored Ape Yacht"
          paragraph="5M $ "
          button="Buy"
        />
        <Auction
          img="/images/nft-hero-4.svg"
          title="Capsule House"
          paragraph="80.000 $ "
          button="Buy"
        />
      </div>
      <div className="partner">
        <img width={200} src="/images/adidas.png" alt="" />
        <h2 className="gucci">GUCCI</h2>
        <img width={330} src="/images/nike.png" alt="" />
        <i className="supreme">Supreme</i>
      </div>
      <Blog />
    </div>
    <div className="video_div">
      <video
        className="video"
        src="/images/asdasd.mp4"
        height={"500px"}
        autoPlay
        loop
        controls
        muted
      ></video>
    </div>
    <Footer />
  </React.StrictMode>
);
