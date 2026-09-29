import { router } from 'expo-router';
import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants';

export default function LoadingScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.92)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
    ]).start();

    const timer = setTimeout(() => {
      router.push('/(auth)/signup');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.topSection,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Text style={styles.brand}>Rent_Park</Text>
        <Animated.View style={styles.brandUnderline} />
      </Animated.View>

      <Animated.View style={[styles.middleSection, { opacity: fadeAnim }]}>
        <Text style={styles.headline}>Welcome</Text>
        <Text style={styles.subheadline}>
          Find your perfect stay with ease.
        </Text>
      </Animated.View>

      <Animated.View style={[styles.bottomSection, { opacity: fadeAnim }]}>
        <LottieView
          source={require('../assets/animations/loading.json')}
          autoPlay
          loop
          style={styles.animation}
        />
        <Text style={styles.loadingLabel}>Getting things ready...</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'space-between',
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.lg,
  },
  topSection: {
    alignItems: 'center',
    marginTop: SPACING.xl,
  },
  brand: {
    ...TYPOGRAPHY.h1,
    color: COLORS.textPrimary,
    fontSize: 38,
    letterSpacing: 2,
    fontWeight: '800',
  },
  brandUnderline: {
    width: 70,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.dark,
    marginTop: SPACING.sm,
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
  },
  headline: {
    ...TYPOGRAPHY.h1,
    color: COLORS.textPrimary,
    fontSize: 46,
    fontWeight: '800',
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  subheadline: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: SPACING.sm,
    lineHeight: 24,
    paddingHorizontal: SPACING.lg,
  },
  bottomSection: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  animation: {
    width: 100,
    height: 100,
  },
  loadingLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
    letterSpacing: 1,
  },
});