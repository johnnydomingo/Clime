// const [nameOfCity, setNameOfCity] = useState('');

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&units=imperial&appid=f0f89e0388f82c90f094a7a9a8675497`;

// // console.log(url)

// const cityArr = ['Dubai', 'Los Angeles', 'London', 'New York', 'San Francisco', 'Paris']
// const cityWeather = []

// const setHomeWeathers = (cityArr) => {
//   cityArr.forEach(city => {
//     setNameOfCity(prevState => prevState = city)
//     axios.get(url).then((response) => {
//       cityWeather.push(response.data.main.temp);
//     });
// }
// setHomeWeathers(cityArr)