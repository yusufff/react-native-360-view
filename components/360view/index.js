import React, { useEffect } from 'react'
import { Dimensions, StyleSheet, Image } from 'react-native'
import { Asset } from 'expo-asset';
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, {
  add,
  sub,
  cond,
  divide,
  eq,
  set,
  useCode,
  multiply,
  floor,
} from "react-native-reanimated";
import {
  usePanGestureHandler,
  useValue,
} from "react-native-redash";

const { width } = Dimensions.get('window');

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const Image360View = ({ srcset, width, height, local }) => {
  useEffect(() => {
    cacheImages(srcset)
  }, [srcset])

  const startX = useValue(0);
  const currentX = useValue(0);
  const startRotation = useValue(0);
  const rotation = useValue(0);
  const index = useValue(0);
  const rotationPeriod = useValue(360 / srcset.length);

  const {
    gestureHandler,
    state,
    position,
  } = usePanGestureHandler();

  useCode(() => [
    cond(eq(state, State.BEGAN), [
      set(startX, position.x),
      set(startRotation, rotation),
    ]),
    cond(eq(state, State.ACTIVE), [
      set(currentX, position.x),
      set(rotation, add(startRotation, divide(multiply(sub(currentX, startX), 180), multiply(0.5, width)))),
      set(index, floor(divide(sub(rotation, multiply(floor(divide(rotation, 360)), 360)), rotationPeriod))), // Math.floor((rotation - Math.floor(rotation / 360) * 360) / rotatePeriod)
    ]),
    cond(eq(state, State.END), [
      set(currentX, position.x),
      set(rotation, add(startRotation, divide(multiply(sub(currentX, startX), 180), multiply(0.5, width)))),
      set(index, floor(divide(sub(rotation, multiply(floor(divide(rotation, 360)), 360)), rotationPeriod))), // Math.floor((rotation - Math.floor(rotation / 360) * 360) / rotatePeriod)
    ]),
  ], [width])

  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View style={{ width, height }}>
        {srcset.map((img, i) => {
          const isActive = eq(index, i);

          return (
            <Animated.Image
              key={`${i}`}
              source={local ? img : { uri: img }}
              style={[
                styles.image,
                { width, height },
                {
                  opacity: cond(isActive, 1, 0),
                }
              ]}
            />
          )
        })}
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0, left: 0,
    resizeMode: 'cover',
  },
})

Image360View.defaultProps = {
  width,
  height: 300,
  srcset: [],
  rotationRatio: 0.5,
  local: false,
}

export default Image360View
