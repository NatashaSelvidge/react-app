import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )} °F`
    );
  }
  let units = "imperial";
  let apiKey = "4d7c857c401c2b610599aeeadfa8b7de";
  let city = `${props.city}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Loader
      type="Puff"
      color="black"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}
