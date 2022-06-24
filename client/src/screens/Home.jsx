import PopularCities from '../components/PopularCities';

export default function Home({ cities, data }) { 
  // console.log(cities)
  return (
    <div>
      <PopularCities cities={cities} data={data} />
    </div>
  )
}