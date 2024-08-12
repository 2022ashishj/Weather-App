import React, { useState } from 'react';
import { Input, Button, HStack } from '@chakra-ui/react';

const SearchComponent = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit" colorScheme="blue">
          Search
        </Button>
      </HStack>
    </form>
  );
};

export default SearchComponent;