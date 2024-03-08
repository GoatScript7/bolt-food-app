import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link, router, useNavigation } from 'expo-router';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useAppContext } from '~/context/appContext';

const ModalAddress = () => {
  const { setCoordinates } = useAppContext();
  const navigation = useNavigation();
  const [headerVisible, setHeaderVisible] = useState(false);
  const [containerMargin] = useState(new Animated.Value(40));

  const googleAPI = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

  const toggleHeaderVisibility = () => {
    setHeaderVisible(!headerVisible);
    if (!headerVisible) {
      Animated.timing(containerMargin, {
        toValue: -100,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(containerMargin, {
        toValue: 40,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  };

  useEffect(() => {
    if (!headerVisible) {
      Animated.timing(containerMargin, {
        toValue: 40,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [headerVisible]);

  useLayoutEffect(() => {
    handleAddressPress();
  }, [headerVisible]);

  const handleSelectPalce = (place) => {
    // console.log('Selected place: ', place.formatted_address);
    const { lat, lng } = place.geometry.location;
    setCoordinates({ latitude: lat, longitude: lng });
    router.replace({
      pathname: '/(tabs)/home',
      params: { address: place.formatted_address },
    });
  };

  const handleAddressPress = () => {
    navigation.setOptions({
      headerShown: headerVisible,
      headerTitle: () => (
        <GooglePlacesAutocomplete
          placeholder="Enter a new address"
          fetchDetails
          onPress={(data, details = null) => {
            handleSelectPalce(details);
          }}
          query={{
            key: googleAPI,
            language: 'en',
            type: 'address',
          }}
          styles={{
            textInput: {
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
          renderLeftButton={() => (
            <AntDesign
              name="search1"
              size={20}
              color="black"
              style={{ alignSelf: 'center', marginLeft: 15, marginRight: 10 }}
            />
          )}
          renderRightButton={() => (
            <TouchableOpacity onPress={toggleHeaderVisibility} style={{ alignSelf: 'center' }}>
              <Text style={{ marginRight: 50, color: '#5a5a5a' }}>Cancel</Text>
            </TouchableOpacity>
          )}
          enablePoweredByContainer={false}
          renderRow={(item) => (
            <View className="flex flex-row items-center">
              <Feather name="map-pin" size={18} color="black" />
              <Text>{item.description}</Text>
            </View>
          )}
        />
      ),
      headerLeft: () => null,
      headerBackVisible: false,
    });
  };

  return (
    <Animated.View style={[styles.container, { marginTop: containerMargin }]}>
      <View style={styles.textContainer}>
        <Link href="/(tabs)/home" asChild>
          <TouchableOpacity style={styles.closeButton}>
            <Ionicons name="close-outline" size={30} color={'#161616'} />
          </TouchableOpacity>
        </Link>
        <View style={styles.deliveryText}>
          <Text style={styles.title}>Delivery address</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.inputContainer} onPress={toggleHeaderVisibility}>
        <AntDesign
          name="search1"
          size={22}
          color="black"
          style={{ alignSelf: 'center', marginLeft: 15 }}
        />
        <View style={styles.input}>
          <Text style={styles.inputText}>Enter a new address</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {},
  deliveryText: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',

    paddingHorizontal: 6,
    paddingVertical: 14,
  },
  input: {
    flex: 1,
    paddingLeft: 8,
  },
  inputText: {
    color: 'gray',
  },
});

export default ModalAddress;
