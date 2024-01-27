import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { dummyRestaurantsData } from '~/assets/data/restaurantsData';
import { TextInput } from 'react-native-gesture-handler';

const ModalFood = () => {
  const { id, itemId } = useLocalSearchParams();
  const restaurantById = dummyRestaurantsData?.find((r) => r?.id === id);
  const meals = restaurantById?.food.flatMap((c) => c.meals);
  const foundMeals = meals?.find((m) => m.id === +itemId);
  //   console.log(foundMeals);

  const [note, setNote] = useState('');

  return (
    <View className={styles.container}>
      <View className="bg-white rounded-b-2xl">
        <Image source={{ uri: foundMeals?.img }} resizeMode="contain" className="w-full h-72" />
        <View className="p-5">
          <Text className="text-2xl font-bold">{foundMeals?.name}</Text>
          <Text className="text-base font-[#6e6d72] my-2">{foundMeals?.price} €</Text>
          <Text className="text-base font-[#6f707c]">{foundMeals?.info}</Text>
        </View>
      </View>

      <View className="bg-white mt-2 rounded-t-2xl p-4">
        <TextInput placeholder="Add a note" value={note} onChangeText={setNote} />
      </View>

      <View className="flex flex-row bg-white mt-1 p-4 mb-auto justify-between">
        <View className="flex flex-row justify-evenly border h-12 w-28 items-center rounded-full">
          <Text>-</Text>
          <Text>1</Text>
          <Text>+</Text>
        </View>
        <TouchableOpacity className="bg-[#34BB78] w-56 rounded-full items-center justify-center">
          <Text className="text-white">Add €3.00</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: 'bg-gray-200 flex flex-1',
};

export default ModalFood;
