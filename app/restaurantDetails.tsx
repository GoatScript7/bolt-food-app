import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SectionList,
  ListRenderItem,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import ParallaxScrollView from '../components/ParallaxScrollView.js';
import { AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Link, useGlobalSearchParams, useNavigation } from 'expo-router';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useAppContext } from 'context/appContext';

const RestaurantDetails = ({ post }) => {
  const { id } = useGlobalSearchParams();

  const { foundMeals, count, totalPrice } = useAppContext();

  const navigation = useNavigation();

  const [headerIconColor, setHeaderIconColor] = useState('white');
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const opacity = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;

    data.forEach((category, index) => {
      const sectionTop = index * 260;
      const sectionBotoom = (index + 1) * 260;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBotoom) {
        setActiveCategoryIndex(index);
      }
    });

    setActiveButtonIndex(activeCategoryIndex);

    if (scrollPosition > 80) {
      setHeaderIconColor('black');
      opacity.value = withTiming(1);
    } else {
      setHeaderIconColor('white');
      opacity.value = withTiming(0);
    }
  };

  const selectCategory = (index: Number) => {
    setActiveButtonIndex(index);
  };

  const ratingStyle = {
    color: post.rating < 4.5 ? 'black' : '#FF8C00',
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
      headerTintColor: 'white',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} className={styles.roundButton}>
          <Ionicons name="arrow-back" size={24} color={headerIconColor} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View className={styles.rightContainer}>
          <TouchableOpacity className={styles.roundButton}>
            <Ionicons name="share-outline" size={24} color={headerIconColor} />
          </TouchableOpacity>
          <TouchableOpacity className={styles.roundButton}>
            <Ionicons name="search-outline" size={24} color={headerIconColor} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [headerIconColor]);

  useEffect(() => {
    setShowButton(totalPrice > 0);
  }, [totalPrice]);

  const renderItem: ListRenderItem<any> = ({ item, index }) => (
    <Link href={{ pathname: '/modalFood', params: { id: id, itemId: item.id } }} asChild>
      <TouchableOpacity
        className={`${styles.itemContainer} ${
          count >= 1 && foundMeals?.id === item.id ? styles.greenBorder : ''
        }`}>
        <View className="flex flex-1 justify-center my-6 mr-8 ml-6">
          <View className="flex flex-row items-center">
            {count >= 1 && foundMeals?.id === item.id && (
              <View className="bg-[#34BB78] items-center w-6 h-7 rounded-md mr-2">
                <Text className="text-lg text-white font-semibold">{count}</Text>
              </View>
            )}
            <Text className="text-base">{item.name}</Text>
          </View>
          <Text className="text-sm text-[#6e6d72]">{item.info}</Text>
          <Text className="">{item.price} €</Text>
        </View>
        <Image
          source={{ uri: item.img }}
          width={100}
          height={100}
          className={styles.foodImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </Link>
  );

  const data = post.food.map((item, index) => ({
    title: item.category,
    data: item.meals,
    index,
  }));

  return (
    <>
      <ParallaxScrollView
        styles={{ flex: 1 }}
        backgroundColor="white"
        parallaxHeaderHeight={200}
        renderBackground={() => (
          <Image
            className="w-full h-full"
            style={{ backgroundColor: 'white' }}
            source={{ uri: post.profileImage }}
            resizeMode="cover"
          />
        )}
        stickyHeaderHeight={80}
        contentBackgroundColor="#ecedef"
        renderStickyHeader={() => (
          <View className={styles.headerContainer}>
            <Text className={styles.headerText}>{post.name}</Text>
          </View>
        )}
        scrollEvent={handleScroll}>
        <View className={styles.namesContainer}>
          <View className="m-6">
            <View className={styles.titleContainerRow}>
              <Text className={styles.restaurantName}>{post.name}</Text>
              <View className={styles.ratingContainerRow}>
                <FontAwesome name="star" size={17} color={ratingStyle.color} />
                <Text className={styles.rating}>{post.rating}</Text>
              </View>
            </View>

            <View className={styles.deliveryTextsContainer}>
              <Ionicons name="bicycle" size={18} color={'black'} />
              <Text className={styles.deliveryTexts}>Delivery</Text>
              <Text>・</Text>
              <FontAwesome5 name="walking" size={15} color="black" />
              <Text className={styles.deliveryTexts}>Pickup</Text>
              <Text>・</Text>

              <Text className={styles.deliveryTextMoreInfo}>More Info</Text>
              <AntDesign
                name="right"
                size={14}
                color="black"
                className={styles.deliveryTextMoreInfo}
              />
            </View>
            <View className={styles.separator} />
            <Text className={styles.deliveryAbout}>{post.about}</Text>
          </View>
        </View>

        <View className={styles.itemsContainer}>
          <View>
            <SectionList
              sections={data}
              scrollEnabled={false}
              keyExtractor={(item, index) => `${item.id + index}`}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View className="border-[0.5px] border-slate-300" />}
              // SectionSeparatorComponent={() => <View className="border-[0.5px] border-slate-300" />}
              renderSectionHeader={({ section: { title, index } }) => (
                <Text className="text-2xl font-bold text-[#2e303d] my-2 ml-6">{title}</Text>
              )}
            />
          </View>
        </View>
      </ParallaxScrollView>

      <Animated.View style={[cStyles.stickySegments, animatedStyles]}>
        <View className="justify-center pt-2 bg-white">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 15,
              alignItems: 'center',
              gap: 10,
            }}>
            {post.food.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => selectCategory(index)}
                className={
                  activeButtonIndex === index ? styles.stickyButtonActive : styles.styckyButton
                }>
                <Text
                  className={
                    activeButtonIndex === index
                      ? styles.stickyButtonTextActive
                      : styles.styckyTextButton
                  }>
                  {item.category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Animated.View>

      {showButton && (
        <Link href={'/basketScreen'} asChild>
          <TouchableOpacity className="pt-4 pb-8 bg-white border-t border-gray-200">
            <View className="bg-[#34BB78] py-3 mx-7 rounded-full font-bold items-center">
              <Text className="text-white font-bold text-lg">View basket {totalPrice} €</Text>
            </View>
          </TouchableOpacity>
        </Link>
      )}
    </>
  );
};

const styles = {
  headerContainer: 'justify-end ml-28 h-16',
  headerText: 'text-xl font-bold',
  namesContainer: 'flex rounded-2xl -mt-12 bg-white',
  titleContainerRow: 'flex flex-row items-center justify-between',
  restaurantName: 'text-2xl font-bold text-[#2e303d]',
  ratingContainerRow: 'flex flex-row items-center',
  rating: 'ml-1 font-bold text-base',
  roundButton: 'w-10 h-10 bg-transparen rounded-full justify-center items-center',
  rightContainer: 'flex flex-row justify-center items-center gap-2',
  deliveryTextsContainer: 'flex flex-row items-center',
  deliveryTexts: 'text-sm ml-1 text-[#2e303d]',
  deliveryTextMoreInfo: 'text-sm font-bold',
  separator: 'h-[0.5px] bg-slate-300 my-4',
  deliveryAbout: 'text-sm ml-1 text-[#2e303d]',
  itemsContainer: 'flex bg-white mt-2 rounded-t-2xl',
  itemContainer: 'flex flex-row justify-between items-center',
  greenBorder: 'border-l-8 border-[#34BB78]',
  foodImage: 'w-28 h-27 rounded-sm',
  stickyButtonActive: 'px-2 py-1',
  styckyButton: 'px-2 py-1',
  stickyButtonTextActive: 'font-bold text-base',
  styckyTextButton: 'text-base',
};

const cStyles = StyleSheet.create({
  stickySegments: {
    position: 'absolute',
    height: 50,
    left: 0,
    right: 0,
    top: 80,
    backgroundColor: '#fff',
    overflow: 'hidden',
    paddingBottom: 4,
  },
});

export default RestaurantDetails;
