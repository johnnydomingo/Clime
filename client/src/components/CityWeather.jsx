import "../css/CityWeather.css";

export default function CityWeather({ data }) {
  return (
    <div className="container">
      <div className="right">
        <div className="location">
          <p>{data.name}</p>
          {data.sys ? <p>{data.sys.country}</p> : null}
        </div>
        <div className="local-time">
          {/* convert from UTC to local time */}
          {/* https://bobbyhadz.com/blog/javascript-convert-utc-to-local-time */}
          {data.dt ? <p>Local Time | {data.dt}</p> : null}
        </div>
        <div className="temp">
          {data.main ? <h2>{data.main.temp.toFixed()}°F</h2> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
      {data.name !== undefined && 
        <div className="left">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed()} mph</p> : null}
            <p>Wind Speed</p>
          </div>
          <div className="bottom">
            <div className="sunrise">
              {data.sys ? <p>{data.sys.sunrise}</p> : null}
              <p>Sunrise</p>
            </div>
            <div className="sunset">
              {data.sys ? <p>{data.sys.sunset}</p> : null}
              <p>Sunset</p>
            </div>
            <div className="temp-min">
              {data.main ? <p>{data.main.temp_min.toFixed()}°F</p> : null}
              <p>Low</p>
            </div>
            <div className="temp-max">
              {data.main ? <p>{data.main.temp_max.toFixed()}°F</p> : null}
              <p>High</p>
            </div>
      </div>
  </div>
  } 
    </div>
  );
}
