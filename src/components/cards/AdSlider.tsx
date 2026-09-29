import { useEffect, useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../../constants';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - SPACING.lg * 2;
const AUTO_SCROLL_INTERVAL = 3500;

export type AdSlide = {
  id: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  bgColor: string;
  textColor: string;
};

const DEFAULT_SLIDES: AdSlide[] = [
  {
    id: '1',
    title: '20% OFF',
    subtitle: 'First booking this week',
    ctaText: 'Claim offer',
    bgColor: '#000000',
    textColor: '#FFFFFF',
  },
  {
    id: '2',
    title: 'Free 1 Hour',
    subtitle: 'On your 5th booking',
    ctaText: 'Learn more',
    bgColor: '#1A1A1A',
    textColor: '#FFFFFF',
  },
  {
    id: '3',
    title: 'Weekend Deals',
    subtitle: 'Save up to 40% on parking',
    ctaText: 'Explore',
    bgColor: '#F7F7F7',
    textColor: '#000000',
  },
];

type Props = {
  slides?: AdSlide[];
  onPressSlide?: (slide: AdSlide) => void;
};

export default function AdSlider({ slides = DEFAULT_SLIDES, onPressSlide }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList<AdSlide>>(null);

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (activeIndex + 1) % slides.length;
      flatListRef.current?.scrollToIndex({
        index: next,
        animated: true,
      });
      setActiveIndex(next);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, [activeIndex, slides.length]);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const idx = Math.round(offsetX / CARD_WIDTH);
    if (idx !== activeIndex) setActiveIndex(idx);
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScroll}
        getItemLayout={(_, index) => ({
          length: CARD_WIDTH,
          offset: CARD_WIDTH * index,
          index,
        })}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => onPressSlide?.(item)}
            style={[
              styles.card,
              { backgroundColor: item.bgColor },
            ]}
          >
            <Text style={[styles.title, { color: item.textColor }]}>
              {item.title}
            </Text>
            <Text style={[styles.subtitle, { color: item.textColor, opacity: 0.8 }]}>
              {item.subtitle}
            </Text>
            {item.ctaText && (
              <View style={[styles.cta, { borderColor: item.textColor }]}>
                <Text style={[styles.ctaText, { color: item.textColor }]}>
                  {item.ctaText}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      />

      {/* Pagination dots */}
      <View style={styles.dots}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === activeIndex ? styles.dotActive : styles.dotInactive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: SPACING.lg },
  card: {
    width: CARD_WIDTH,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    minHeight: 160,
    justifyContent: 'space-between',
  },
  title: {
    ...TYPOGRAPHY.h2,
    fontSize: 28,
  },
  subtitle: {
    ...TYPOGRAPHY.body,
    marginTop: SPACING.xs,
  },
  cta: {
    alignSelf: 'flex-start',
    borderWidth: 1.5,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.full,
    marginTop: SPACING.md,
  },
  ctaText: {
    ...TYPOGRAPHY.bodySmall,
    fontWeight: '700',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SPACING.md,
    gap: 6,
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
  dotActive: {
    width: 20,
    backgroundColor: COLORS.dark,
  },
  dotInactive: {
    width: 6,
    backgroundColor: COLORS.border,
  },
});