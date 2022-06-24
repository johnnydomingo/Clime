import "../css/CityWeather.css";
import backgrounds from "../assets/backgrounds.jpg";

export default function CityWeather({ data }) {
  return (
    <div className="container">
      <div className="left-column">
        <div className="location">
          <p className="data-name">{data.name}</p>
          {data.sys ? <p className="data-country">{data.sys.country}</p> : null}
        </div>

        <div className="temp">
          {data.main ? <h2>{data.main.temp.toFixed()}°F</h2> : null}
        </div>
        <div className="description">
          {data.weather ? <p className="type">{data.weather[0].main}</p> : null}
        </div>
      </div>
      {data.name !== undefined && (
        <div className="right-column">
          <div className="feels">
            <p className="label">Feels like</p>
            {data.main ? <p id="info">{data.main.feels_like.toFixed()}°F</p> : null}
          </div>
          <div className="humidity">
            <p className="label">Humidity</p>
            {data.main ? <p id="info">{data.main.humidity}%</p> : null}
          </div>
          <div className="wind">
            <p className="label">Wind Speed</p>
            {data.wind ? <p id="info">{data.wind.speed.toFixed()} mph</p> : null}
          </div>

          <div className="temp-min">
            <p className="label">Low</p>
            {data.main ? <p id="info">{data.main.temp_min.toFixed()}°F</p> : null}
          </div>
          <div className="temp-max">
            <p className="label">High</p>
            {data.main ? <p id="info">{data.main.temp_max.toFixed()}°F</p> : null}
          </div>
        </div>
      )}
    </div>
  );
}
