import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

const TreeAnimated = ({ style }) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 10,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -10,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(rotate, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(rotate, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['-5deg', '5deg'],
  });

  return (
    <Animated.Image
      source={require('../../assets/tree.png')}
      style={[
        styles.tree,
        style,
        {
          transform: [
            { translateX },
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

export default TreeAnimated;