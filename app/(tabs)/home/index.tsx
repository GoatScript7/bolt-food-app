import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MarketCard from 'components/marketCard';
import { dummyRestaurantsData } from '../../../assets/data/restaurantsData';
import { Link } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import { useAppContext } from '~/context/appContext';
import { useEffect } from 'react';

export default function HomeScreen() {
  const route = useRoute();
  const { streetName, setStreet } = useAppContext();

  useEffect(() => {
    const address = route.params?.address || 'Your address here';
    const streetName = address.split(',')[0].trim();
    setStreet(streetName);
  }, [route.params?.address, setStreet]);

  return (
    <SafeAreaView className={styles.container}>
      <FlatList
        data={dummyRestaurantsData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <>
            <Link href="/modalAddress" asChild>
              <TouchableOpacity className={styles.header}>
                <View className={styles.addressContainer}>
                  <MaterialCommunityIcons name="map-marker-outline" size={28} color="black" />
                  <Text className={styles.addressText}>{streetName}</Text>
                </View>
              </TouchableOpacity>
            </Link>

            <Text className={styles.cardTitle}>All Restaurants and Stores</Text>
          </>
        )}
        renderItem={({ item }) => <MarketCard restaurantData={item} />}
      />
    </SafeAreaView>
  );
}

const styles = {
  container: 'flex-1 p-4 mt-6 bg-white',
  header: 'flex-row justify-between',
  title: 'text-xl font-bold',
  addressContainer: 'flex-row items-center',
  addressText: 'ml-2',
  cardContainer: 'mt-4',
  cardImage: 'w-full h-200 rounded-lg',
  cardTitle: 'mt-4 mb-2 text-lg font-bold',
};
