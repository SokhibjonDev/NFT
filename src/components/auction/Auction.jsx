import "./Auction.css";

function Auction(props) {
  return (
    <div className="Auction">
      <div className="card">
        <div className="cardImg">
          <img className="nftImage" src={props.img} alt="" />
        </div>
        <div className="cardInfo">
          <h3>{props.title}</h3>
          <p>
            {props.paragraph}
            <button>{props.button}</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auction;
