import "./Discover.css";

function Discover(props) {
  return (
    <div className="Discover">
      <div className="discoverCard">
        <div className="radius">
          {props.radius}
          <img src="/images/svg.svg" alt="" />
        </div>

        <h2>{props.title}</h2>
        <p>{props.info}</p>
      </div>
    </div>
  );
}

export default Discover;
