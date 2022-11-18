const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const API_KEY = "&appid=b8af752d805e5c2e9d3791973185de87";
const API_UNITS = "&units=metric";

const WEATHER_LINK = `https://api.openweathermap.org/data/2.5/weather?`;

const GEO_LINK = `http://api.openweathermap.org/geo/1.0/direct?q=`;

const getLatLon = (city) => {
	const GEO_URL = GEO_LINK + city + API_KEY;
	return axios
		.get(GEO_URL)
		.then((res) => {
			let lat = "lat=",
				lon = "&lon=";
			lat += res.data[0].lat;
			lon += res.data[0].lon;
			return lat + lon;
		})
		.catch(() => (warning.textContent = "Wpisz poprawna nazwe miasta"));
};

const setWeatherImg = (id) => {
	if (Math.floor(id / 100) === 2) return "./img/thunderstorm.png";
	else if (Math.floor(id / 100) === 3) return "./img/drizzle.png";
	else if (Math.floor(id / 100) === 5) return "./img/rain.png";
	else if (Math.floor(id / 100) === 6) return "./img/ice.png";
	else if (Math.floor(id / 100) === 7) return "./img/fog.png";
	else if (id === 800) return "./img/sun.png";
	else if (id > 800 && id < 900) return "./img/cloud.png";
	else return "./img/unknown.png";
};

const getWeather = async () => {
	const city = input.value || "london";
	const latLon = (await getLatLon(city)) || "lat=51.5073219&lon=-0.1276474";
	const URL = WEATHER_LINK + latLon + API_KEY + API_UNITS;

	axios
		.get(URL)
		.then((res) => {
			const temp = res.data.main.temp;
			const hum = res.data.main.humidity;
			const status = Object.assign({}, ...res.data.weather);

			photo.setAttribute("src", setWeatherImg(status.id));
			cityName.textContent = res.data.name;
			temperature.textContent = Math.floor(temp) + "°C";
			humidity.textContent = hum + "%";
			weather.textContent = status.main;
			warning.textContent = "";
		})
		.catch(() => (warning.textContent = "Wpisz poprawna nazwe miasta"));
};

button.addEventListener("click", getWeather);
input.addEventListener("keyup", (e) => {
	if (e.key === "Enter") getWeather();
});
