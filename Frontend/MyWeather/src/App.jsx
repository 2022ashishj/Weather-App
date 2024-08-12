import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Heading } from '@chakra-ui/react';
import SearchComponent from './components/SearchComponent';
import WeatherDisplay from './components/WeatherDisplay';
import FavoriteComponent from './components/Favorite';
import { fetchWeatherData } from './utils/api';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await fetch('https://weather-app-ecar.onrender.com/Favourites');
      const data = await response.json();
      setFavorites(data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const handleSearch = async (city) => {
    const data = await fetchWeatherData(city);
    setWeatherData(data);
  };

  const addFavorite = async (city) => {
    try {
      const response = await fetch('https://weather-app-ecar.onrender.com/Favourites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city }),
      });
      if (response.ok) {
        fetchFavorites();
      }
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  const removeFavorite = async (id) => {
    try {
      const response = await fetch(`https://weather-app-ecar.onrender.com/Favourites/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchFavorites();
      }
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <VStack spacing={8}>
          <Heading as="h1" size="2xl">Weather Dashboard</Heading>
          <SearchComponent onSearch={handleSearch} />
          <WeatherDisplay weatherData={weatherData} addFavorite={addFavorite} />
          <FavoriteComponent favorites={favorites} removeFavorite={removeFavorite} onSelectFavorite={handleSearch} />
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default App;