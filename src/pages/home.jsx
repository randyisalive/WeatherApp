import CardCloud from "../components/CardCloud";
import CardMenu from "../components/CardMenu";
import { useEffect, useState } from "react";
import API_KEY from "../APIKEY";
import "./home.css";
import { COUNTRY_LIST } from "../CountryList";

function time() {
  const dateObj = new Date();
  const hour = dateObj.getHours();
  const min = dateObj.getMinutes();
  const time = hour + ":" + min;
  return time;
}

function Home() {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [date, setDate] = useState(null);

  useEffect(() => {
    fetch("http://api.weatherapi.com/v1/current.json?key=" + API_KEY + "&q=" + select)
      .then((response) => response.json()) // Added parentheses here
      .then((jsonData) => {
        setData(jsonData);
        // eslint-disable-next-line no-constant-condition
        if (data) {
          setLoading(true);
          console.log("Loading State: " + isLoading + " data: " + jsonData.length);
        } else {
          setLoading(false);
          console.log("Loading State: " + isLoading + " data: " + data.length);
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error + "This error");
        return (
          <div>
            <h1>Error</h1>
          </div>
        );
      });

    setInterval(() => {
      setDate(time()), 60000;
    }); //
  }, [select]);

  if (isLoading === false) {
    return <div>No data avaliable</div>;
  }

  return (
    <>
      <div className="navbar">
        <div className="time-container">
          <h1>{date}</h1>
          {console.log(data["current"]["temp_c"])}
        </div>
      </div>
      <div className="container">
        {
          isLoading ? (
            <CardCloud
              imgCloud="/partly-cloudy.png"
              temperature={data["current"]["temp_c"]}
              country={data["location"]["country"]}
              region={data["location"]["region"]}
              conditionText={data["current"]["condition"]["text"]}
            />
          ) : null // if isLoading is true (data been loaded) then render CardCloud
        }
        <CardMenu
          select={
            <select
              name="country"
              id=""
              onChange={(e) => {
                setSelect(e.target.value);
              }}
            >
              <option value="">Select Country Below: </option>
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
      </div>
    </>
  );
}

export default Home;
