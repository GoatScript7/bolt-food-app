import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [streetName, setStreetName] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurantById, setRestaurantById] = useState(null);
  const [meals, setMeals] = useState([]);
  const [foundMeals, setFoundMeals] = useState(null);
  const [count, setCount] = useState(1);
  const [coordinates, setCoordinates] = useState(null);

  const setStreet = (street) => {
    setStreetName(street);
  };

  const setFoodData = (data) => {
    setTotalPrice(data.totalPrice);
    setRestaurantById(data.restaurantById);
    setMeals(data.meals);
    setFoundMeals(data.foundMeals);
    setCount(data.count);
  };

  const setCoordinatesData = (coord) => {
    setCoordinates(coord);
  };

  return (
    <AppContext.Provider
      value={{
        streetName,
        setStreet,
        totalPrice,
        setTotalPrice,
        restaurantById,
        setRestaurantById,
        meals,
        setMeals,
        foundMeals,
        setFoundMeals,
        count,
        setCount,
        setFoodData,
        coordinates,
        setCoordinates: setCoordinatesData,
      }}>
      {children}
    </AppContext.Provider>
  );
};
