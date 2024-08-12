import axios from 'axios';

const API_KEY = '5eb36167a46a2b477bbd125153b0ff79';  
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
  try {
    const currentWeather = await axios.get(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
    const forecast = await axios.get(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);

    return {
      current: currentWeather.data,
      forecast: forecast.data,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};