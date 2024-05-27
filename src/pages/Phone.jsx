import React, { useEffect, useState } from "react";
import "../pages/home.css";
import "../pages/phone.css";
import useWeatherData from "../function/useWeatherData";
import time from "../function/time";
import Loading from "./Loading";
import getDate from "../function/getDate";

function Phone() {
  const [date, setDate] = useState(null);

  const { data, select, setSelect, isLoading, isloading_1 } = useWeatherData();
  useEffect(() => {
    setInterval(() => {
      setDate(time()), 60000;
    }); //
  }, [select]);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="card-phone-container">
            <div className="weather-image-phone-container">
              <img
                src="/partly-cloudy.png"
                alt="sun-image"
                className="weather-image"
              />
            </div>
            <div className="d-flex">
              <div className="d-flex w-100">
                <div className="d-flex" id="left-container">
                  <span id="celcius">{`${data["current"]["temp_c"]}°C`}</span>
                  <div className="d-flex flex-column" id="condition-container">
                    <span>{data["current"]["condition"]["text"]}</span>
                    <span>
                      {data["location"]["country"]},{" "}
                      {data["location"]["region"]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex w-50" id="right-container">
                {getDate()}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Phone;
