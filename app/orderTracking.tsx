import { View, Text } from 'react-native';
import React, { useMemo } from 'react';
import { useAppContext } from '~/context/appContext';
import MapView, { Marker } from 'react-native-maps';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import BottomSheetComponent from '~/components/bottomSheetComponent';

const OrderTracking = () => {
  const { coordinates } = useAppContext();
  const snapPoints = useMemo(() => ['20%', '100%'], []);

  const { latitude, longitude } = coordinates || {};

  return (
    <View className="flex flex-1">
      {/* MapView */}
      <MapView
        className="w-full h-full rounded-lg"
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        {/* Person */}
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}>
          <View className="w-8 h-8 rounded-full bg-black flex justify-center items-center">
            <Ionicons name="person" size={18} color="white" />
          </View>
        </Marker>

        {/* Store */}
        <Marker
          coordinate={{
            latitude: 54.7244728,
            longitude: 25.2754447,
          }}>
          <View className="w-8 h-8 rounded-full bg-black flex justify-center items-center">
            <FontAwesome5 name="store" size={14} color="white" />
          </View>
        </Marker>

        {/* Driver */}
        <Marker
          coordinate={{
            latitude: 54.7255593,
            longitude: 25.2775182,
          }}>
          <View className="w-8 h-8 rounded-full bg-purple-500 flex justify-center items-center">
            <AntDesign name="car" size={18} color="white" />
          </View>
        </Marker>
      </MapView>

      {/* Bottom Sheet */}
      <BottomSheetComponent />
    </View>
  );
};

export default OrderTracking;
