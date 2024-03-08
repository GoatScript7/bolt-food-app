import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const PricingComponent = ({ totalPrice }) => {
  const fullyPrice = totalPrice;
  return (
    <>
      {/* Discount */}
      <View className="flex flex-row items-center justify-between mb-2">
        <View className="flex flex-row items-center">
          <Text className="text-sm mr-1">Discount</Text>
          <Ionicons name="information-circle-outline" size={24} color="black" />
        </View>
        <Text className="text-sm">0.00 €</Text>
      </View>

      {/* Subtotal */}
      <View className="flex flex-row items-center justify-between mb-2">
        <View className="flex flex-row items-center">
          <Text className="text-sm mr-1 font-bold">Subtotal</Text>
        </View>
        <Text className="text-sm font-bold">0.00 €</Text>
      </View>

      {/* Small order fee */}
      <View className="flex flex-row items-center justify-between mb-2">
        <View className="flex flex-row items-center">
          <Text className="text-sm mr-1">Small order fee</Text>
          <Ionicons name="information-circle-outline" size={24} color="black" />
        </View>
        <Text className="text-sm">0.00 €</Text>
      </View>

      {/* Service fee */}
      <View className="flex flex-row items-center justify-between mb-2">
        <View className="flex flex-row items-center">
          <Text className="text-sm mr-1">Service fee</Text>
          <Ionicons name="information-circle-outline" size={24} color="black" />
        </View>
        <Text className="text-sm">0.00 €</Text>
      </View>

      {/* Delivery fee */}
      <View className="flex flex-row items-center justify-between mb-2">
        <View className="flex flex-row items-center">
          <Text className="text-sm mr-1">Delivery fee</Text>
        </View>
        <Text className="text-sm">0.00 €</Text>
      </View>

      {/* Delivery discount */}
      <View className="flex flex-row items-center justify-between mb-2">
        <View className="flex flex-row items-center">
          <Text className="text-sm mr-1">Delivery discount</Text>
        </View>
        <Text className="text-sm">0.00 €</Text>
      </View>

      {/* Separator */}
      <View className="border-[0.5px] border-slate-200 my-4" />

      {/* Total */}
      <View className="flex flex-row items-center justify-between mb-2">
        <View className="flex flex-row items-center">
          <Text className="text-sm mr-1 font-bold">Total</Text>
        </View>
        <Text className="text-sm font-bold">{fullyPrice} €</Text>
      </View>
    </>
  );
};

export default PricingComponent;
