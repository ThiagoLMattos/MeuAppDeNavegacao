import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Easing } from 'react-native';

const CloudAnimated = ({ style }) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
        Animated.timing(translateX, {
          toValue: 40,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.sin),
        })
      ).start();
    
      Animated.loop(
        Animated.timing(rotate, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.sin),
        })
      ).start();
    }, []);



    const oscillation = translateX.interpolate({
        inputRange: [0, 1],
        outputRange: [-30, 30],
      });
      
      const spin = rotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['-5deg', '5deg'],
      });
  return (
    <Animated.Image
      source={require('../../assets/cloud.png')}
      style={[
        styles.tree,
        style,
        {
          transform: [
            { translateX: oscillation },
            { rotate: spin },
          ],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  tree: {
    width: 120,
    height: 120,
  },
});

export default CloudAnimated;