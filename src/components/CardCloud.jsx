import "./CardCloud.css";

function getDate() {
  const time = new Date();
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = time.getDate();
  let month = months[time.getMonth()];
  return date + " " + month;
}

function CardCloud(props) {
  return (
    <div className="card">
      <div className="cloud">
        <img src={props.imgCloud} alt="" />
      </div>
      <div className="data-container">
        <div className="data">
          <span>{props.temperature}°C</span>
          <div className="data-weather">
            <span>{props.conditionText}</span>
            <span className="location">
              {props.country}, {props.region}
            </span>
          </div>
        </div>
        <div className="date">
          <span>{getDate()}</span>
        </div>
      </div>
    </div>
  );
}

export default CardCloud;
