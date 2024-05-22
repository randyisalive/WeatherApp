import CardCloud from "../components/CardCloud";
import CardMenu from "../components/CardMenu";
import { useEffect, useState } from "react";
import "./home.css";
import { COUNTRY_LIST } from "../CountryList";
import Loading from "./Loading";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import useWeatherData from "../function/useWeatherData";

function time() {
  const dateObj = new Date();
  const hour = dateObj.getHours();
  const min = dateObj.getMinutes();
  const time = hour + ":" + min;
  return time;
}

function Home() {
  const { data, select, setSelect, isLoading, isloading_1 } = useWeatherData();
  const [date, setDate] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setDate(time()), 60000;
    }); //
  }, [select]);

  return (
    <>
      <div className="navbar">
        <div className="time-container">
          <h1>{date}</h1>
        </div>
      </div>
      <div className="container">
        {
          isLoading ? (
            <Loading />
          ) : (
            <>
              <CardCloud
                isLoading_1={isloading_1}
                imgCloud="/partly-cloudy.png"
                temperature={data["current"]["temp_c"]}
                country={data["location"]["country"]}
                region={data["location"]["region"]}
                conditionText={data["current"]["condition"]["text"]}
              />
              <CardMenu
                select={
                  <select
                    name="country"
                    id=""
                    onChange={(e) => {
                      setSelect(e.target.value);
                    }}
                  >
                    <option value="null">Select Country Below: </option>
                    {COUNTRY_LIST.map((items) => {
                      return (
                        <option key={items.code} value={items.name}>
                          {items.name}
                        </option>
                      );
                    })}
                  </select>
                }
              />
            </>
          ) // if isLoading is true (data been loaded) then render CardCloud
        }
      </div>
    </>
  );
}

export default Home;
