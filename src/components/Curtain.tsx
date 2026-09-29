import { ReactNode, useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

/* ------------------------------------------------------------------ */
/*  CurtainExit — line appears, expands to full black, then navigates  */
/* ------------------------------------------------------------------ */

export function CurtainExit({
  children,
  active,
  onFinish,
  duration = 700,
}: {
  children: ReactNode;
  active: boolean;
  onFinish?: () => void;
  duration?: number;
}) {
  const curtainWidth = useRef(new Animated.Value(2)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!active) return;

    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }),
      Animated.timing(curtainWidth, {
        toValue: SCREEN_WIDTH,
        duration,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.cubic),
      }),
    ]).start(() => onFinish?.());
  }, [active]);

  return (
    <View style={styles.root}>
      <View style={styles.content}>{children}</View>
      <Animated.View
        pointerEvents="none"
        style={[styles.curtain, { width: curtainWidth, opacity }]}
      />
    </View>
  );
}

/* ------------------------------------------------------------------ */
/*  CurtainEnter — full black shrinks back to line, then line fades    */
/* ------------------------------------------------------------------ */

export function CurtainEnter({
  children,
  duration = 700,
  hold = 120,
}: {
  children: ReactNode;
  duration?: number;
  hold?: number;
}) {
  const curtainWidth = useRef(new Animated.Value(SCREEN_WIDTH)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(hold),
      Animated.timing(curtainWidth, {
        toValue: 2,
        duration,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.cubic),
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.content}>{children}</View>
      <Animated.View
        pointerEvents="none"
        style={[styles.curtain, { width: curtainWidth, opacity }]}
      />
    </View>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.dark,   // ⚫ base — no white flash
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.background,  // ⚪ actual screen content
  },
  curtain: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: COLORS.dark,
  },
});