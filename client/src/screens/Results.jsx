// Components
import CityWeather from "../components/CityWeather";

export default function Results({ data }) {
  return (
    <div className="container">
      <CityWeather data={data} />
    </div>
  );
}
