// Components
import PopularCities from "../components/PopularCities";

export default function Home({ cities, data, setCities }) {
  return (
    <div>
      <PopularCities cities={cities} data={data} setCities={setCities} />
    </div>
  );
}
