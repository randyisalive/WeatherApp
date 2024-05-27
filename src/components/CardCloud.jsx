import getDate from "../function/getDate";
import Loading from "../pages/Loading";
import "./CardCloud.css";

function CardCloud({
  imgCloud,
  temperature,
  conditionText,
  country,
  region,
  isLoading_1,
}) {
  return (
    <div className="card">
      <div className="cloud">
        <img src={imgCloud} alt="" />
      </div>
      <div className="data-container">
        <div className="data">
          {isLoading_1 ? (
            <Loading />
          ) : (
            <>
              <span>{temperature}°C</span>
              <div className="data-weather">
                <span>{conditionText}</span>
                <span className="location">
                  {country}, {region}
                </span>
              </div>
            </>
          )}
        </div>
        <div className="date">
          <span>{getDate()}</span>
        </div>
      </div>
    </div>
  );
}

export default CardCloud;
