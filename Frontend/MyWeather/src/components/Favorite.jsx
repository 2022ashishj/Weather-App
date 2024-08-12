import React from 'react';
import { VStack, HStack, Text, Button } from '@chakra-ui/react';

const FavoriteComponent = ({ favorites, removeFavorite, onSelectFavorite }) => {
  return (
    <VStack spacing={4} align="stretch" width="100%">
      <Text fontSize="xl" fontWeight="bold">Favorite Cities</Text>
      {favorites.map((favorite) => (
        <HStack key={favorite.id} justify="space-between">
          <Text>{favorite.city}</Text>
          <HStack>
            <Button onClick={() => onSelectFavorite(favorite.city)} colorScheme="blue" size="sm">
              View Weather
            </Button>
            <Button onClick={() => removeFavorite(favorite.id)} colorScheme="red" size="sm">
              Remove
            </Button>
          </HStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default FavoriteComponent;