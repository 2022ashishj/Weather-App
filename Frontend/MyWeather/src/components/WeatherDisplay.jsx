import React from 'react';
import { Box, VStack, HStack, Text, Image, Button } from '@chakra-ui/react';

const WeatherDisplay = ({ weatherData, addFavorite }) => {
  if (!weatherData) return null;

  const { name, main, weather, dt } = weatherData.current;
  const forecast = weatherData.forecast.list.slice(0, 5);

  return (
    <Box width="100%" borderWidth={1} borderRadius="lg" overflow="hidden" p={4}>
      <VStack spacing={4} align="stretch">
        <HStack justify="space-between">
          <VStack align="start">
            <Text fontSize="2xl" fontWeight="bold">{name}</Text>
            <Text fontSize="4xl">{Math.round(main.temp)}°C</Text>
            <Text>{weather[0].description}</Text>
          </VStack>
          <Image
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].description}
          />
        </HStack>
        <Button onClick={() => addFavorite(name)} colorScheme="teal">
          Add to Favorites
        </Button>
        <HStack justify="space-between">
          {forecast.map((day) => (
            <VStack key={day.dt} spacing={1}>
              <Text>{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</Text>
              <Image
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
              />
              <Text>{Math.round(day.main.temp)}°C</Text>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default WeatherDisplay;