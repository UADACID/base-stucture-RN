import { Easing, Animated } from 'react-native'
export const transitionConfig = () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        nativeDriver:true
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        // console.log({ layout, position, scene });
        const { index } = scene;

        const { routeName } = scene.route
        // console.log({routeName});
        if (routeName !== 'Previews') {
          // console.log('custom nyamping');
          const height = layout.initHeight;
          const width = layout.initWidth;
          const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [width, 0, 0],
          });

          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });

          return { opacity, transform: [{ translateX }] };
        }

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    })
// })
