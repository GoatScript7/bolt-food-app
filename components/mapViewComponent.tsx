import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

const MapViewComponent = ({ streetName, latitude, longitude }) => {
  return (
    <>
      {/* Google places autocompleet */}
      <TouchableOpacity className={styles.header}>
        <View className={styles.addressContainer}>
          <MaterialCommunityIcons name="map-marker-outline" size={28} color="black" />
          <Text className={styles.addressText}>{streetName}</Text>
        </View>
        <Entypo name="chevron-thin-right" size={22} color="gray" />
      </TouchableOpacity>

      {/* MapView */}
      <View className="flex flex-1 w-full h-full mt-4">
        <View className="flex flex-1 rounded-lg overflow-hidden">
          <MapView
            className="w-full h-52 rounded-lg"
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            }}>
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}>
              <View className="w-8 h-8 rounded-full bg-[#34BB78] flex justify-center items-center">
                <View className="bg-white w-3 h-3 rounded-full" />
              </View>
            </Marker>
          </MapView>
        </View>

        {/* Map inputs */}
        <TextInput
          className="bg-gray-100 rounded-lg mt-2 p-3"
          placeholder="Apt./office/floor/postal code"
          placeholderTextColor="gray"
        />
        <TextInput
          className="bg-gray-100 rounded-lg mt-2 p-3"
          placeholder="Add a note for the courier"
          placeholderTextColor="gray"
        />
      </View>
    </>
  );
};

const styles = {
  header: 'flex-row justify-between',
  addressContainer: 'flex-row items-center',
  addressText: 'ml-2',
};

export default MapViewComponent;
