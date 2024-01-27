import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MarketCard from '~/components/marketCard';
import { dummyRestaurantsData } from '~/assets/data/restaurantsData';

const HomeScreen = () => {
  return (
    <SafeAreaView className={styles.container}>
      <View className={styles.header}>
        <View className={styles.addressContainer}>
          <MaterialCommunityIcons name="map-marker-outline" size={28} color={'black'} />
          <Text className={styles.addressText}>Your Address Here</Text>
        </View>
      </View>

      <FlatList
        data={dummyRestaurantsData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <Text className={styles.cardTitle}>All Restaurants And Stores</Text>
        )}
        renderItem={({ item }) => <MarketCard restaurantData={item} />}
      />
    </SafeAreaView>
  );
};

const styles = {
  container: 'flex-1 p-4 mt-6 bg-white',
  header: 'flex-row justify-between',
  addressContainer: 'flex-row items-center',
  addressText: 'ml-2',
  cardTitle: 'mt-4 mb-2 text-lg font-bold',
};

export default HomeScreen;
