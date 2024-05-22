import React, { useEffect, useState } from "react";
import weather_fetch from "./fetch/weather_fetch";

function useWeatherData() {
  const { get_weather } = weather_fetch();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isloading_1, setIsLoading_1] = useState(true);
  const [select, setSelect] = useState("indonesia");

  useEffect(() => {
    setIsLoading_1(true);
    get_weather(select).then((data) => {
      setData(data);
      console.log(data);
      setIsLoading(false);
      setIsLoading_1(false);
    });
  }, [select]);

  return { data, select, setSelect, isLoading, isloading_1 };
}

export default useWeatherData;
