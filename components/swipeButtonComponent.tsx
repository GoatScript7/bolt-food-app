import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { SwipeButton } from '@arelstone/react-native-swipe-button';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

const SwipeButtonComponent = () => {
  const [swiping, setSwiping] = useState(false);

  const onCompleteProgress = () => {
    router.push('/orderTracking');
  };
  return (
    <View className="flex flex-1 bg-white">
      <SwipeButton
        Icon={<AntDesign name="arrowright" size={24} color="#34bb78" />}
        onComplete={onCompleteProgress}
        title={'Place order \n Slide to confirm'}
        containerStyle={{ backgroundColor: '#34bb78' }}
        circleBackgroundColor="white"
        underlayStyle={{
          backgroundColor: swiping ? '#34bb78' : 'white',
          borderRadius: 999,
          marginLeft: 10,
        }}
        height={60}
        titleStyle={{ color: 'white', fontSize: 14 }}
        onSwipeStart={() => setSwiping(true)}
        onSwipeEnd={() => setSwiping(false)}
        completeThresholdPercentage={70}
        goBackToStart={true}
      />
    </View>
  );
};

export default SwipeButtonComponent;
