import React from "react";
import API_KEY from "../../APIKEY";

function weather_fetch() {
  async function get_weather(select) {
    try {
      const response = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=" +
          API_KEY +
          "&q=" +
          select
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  return { get_weather };
}

export default weather_fetch;
