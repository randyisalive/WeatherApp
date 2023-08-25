const COUNTRY_DATA = [
  {
    coord: {
      lon: 76.96,
      lat: 11,
    },
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    base: "stations",
    main: {
      temp: 26.45,
      pressure: 1007.01,
      humidity: 83,
      temp_min: 26.45,
      temp_max: 26.45,
      sea_level: 1007.01,
      grnd_level: 954.39,
    },
    wind: {
      speed: 1.83,
      deg: 245.509,
    },
    rain: {
      "3h": 4.438,
    },
    clouds: {
      all: 99,
    },
    dt: 1569138431,
    sys: {
      message: 0.0065,
      country: "IN",
      sunrise: 1569112882,
      sunset: 1569156535,
    },
    timezone: 19800,
    id: 1273865,
    name: "Coimbatore",
    cod: 200,
  },
];

export default COUNTRY_DATA;
