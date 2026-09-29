import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../../../constants';

// 🚧 Mock data — replace with real data from authStore / API later
const MOCK_CAR = {
  make: 'Toyota',
  model: 'Corolla',
  plate: 'DHA-1234',
  year: '2020',
};

const MOCK_SLIDES = [
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

export default function DriverHome() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* ─── Header ─── */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hey there 👋</Text>
            <Text style={styles.name}>Ready to park?</Text>
          </View>
          <TouchableOpacity
            style={styles.notificationBtn}
            onPress={() => console.log('Notifications')}
          >
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* ─── Ad Slider (static first slide, manually paged) ─── */}
        <View style={styles.adsWrapper}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={280}
            decelerationRate="fast"
          >
            {MOCK_SLIDES.map((slide) => (
              <TouchableOpacity
                key={slide.id}
                activeOpacity={0.9}
                style={[
                  styles.adCard,
                  { backgroundColor: slide.bgColor },
                ]}
              >
                <Text style={[styles.adTitle, { color: slide.textColor }]}>
                  {slide.title}
                </Text>
                <Text
                  style={[
                    styles.adSubtitle,
                    { color: slide.textColor, opacity: 0.8 },
                  ]}
                >
                  {slide.subtitle}
                </Text>
                {slide.ctaText && (
                  <View
                    style={[styles.adCta, { borderColor: slide.textColor }]}
                  >
                    <Text
                      style={[styles.adCtaText, { color: slide.textColor }]}
                    >
                      {slide.ctaText}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.dots}>
            {MOCK_SLIDES.map((_, i) => (
              <View
                key={i}
                style={[styles.dot, i === 0 ? styles.dotActive : styles.dotInactive]}
              />
            ))}
          </View>
        </View>

        {/* ─── Car Info Card ─── */}
        <View style={styles.carCard}>
          <View style={styles.carHeader}>
            <Text style={styles.sectionLabel}>MY VEHICLE</Text>
            <TouchableOpacity onPress={() => router.push('/driver/profile')}>
              <Text style={styles.editLink}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.carBody}>
            <View style={styles.carIconBox}>
              <Text style={styles.carIcon}>🚗</Text>
            </View>
            <View style={styles.carInfo}>
              <Text style={styles.carTitle}>
                {MOCK_CAR.make} {MOCK_CAR.model}
              </Text>
              <View style={styles.carMeta}>
                <View style={styles.plate}>
                  <Text style={styles.plateText}>{MOCK_CAR.plate}</Text>
                </View>
                <Text style={styles.year}>{MOCK_CAR.year}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* ─── Quick Actions ─── */}
        <View style={styles.actionsCard}>
          <Text style={styles.sectionLabel}>QUICK ACTIONS</Text>

          <TouchableOpacity
            style={styles.primaryAction}
            activeOpacity={0.85}
            onPress={() => router.push('/driver/map')}
          >
            <Text style={styles.primaryActionIcon}>🅿️</Text>
            <View style={styles.actionTextWrap}>
              <Text style={styles.primaryActionTitle}>Find Parking</Text>
              <Text style={styles.primaryActionSubtitle}>
                Search nearby spots on the map
              </Text>
            </View>
            <Text style={styles.chevron}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryAction}
            activeOpacity={0.85}
            onPress={() => router.push('/driver/bookings')}
          >
            <Text style={styles.secondaryIcon}>📅</Text>
            <View style={styles.actionTextWrap}>
              <Text style={styles.secondaryTitle}>My Bookings</Text>
              <Text style={styles.secondarySubtitle}>
                View current & past bookings
              </Text>
            </View>
            <Text style={styles.chevronDark}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryAction}
            activeOpacity={0.85}
            onPress={() => router.push('/driver/favorites')}
          >
            <Text style={styles.secondaryIcon}>❤️</Text>
            <View style={styles.actionTextWrap}>
              <Text style={styles.secondaryTitle}>Saved Spots</Text>
              <Text style={styles.secondarySubtitle}>
                Your favorite parking places
              </Text>
            </View>
            <Text style={styles.chevronDark}>→</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scroll: { padding: SPACING.lg, paddingBottom: SPACING.xxl },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  greeting: { ...TYPOGRAPHY.bodySmall, color: COLORS.textSecondary },
  name: { ...TYPOGRAPHY.h2, color: COLORS.textPrimary },
  notificationBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationIcon: { fontSize: 20 },

  // Ads
  adsWrapper: { marginBottom: SPACING.lg },
  adCard: {
    width: 260,
    height: 160,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginRight: SPACING.md,
    justifyContent: 'space-between',
  },
  adTitle: { ...TYPOGRAPHY.h2, fontSize: 26 },
  adSubtitle: { ...TYPOGRAPHY.bodySmall, marginTop: SPACING.xs },
  adCta: {
    alignSelf: 'flex-start',
    borderWidth: 1.5,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.full,
    marginTop: SPACING.sm,
  },
  adCtaText: { ...TYPOGRAPHY.bodySmall, fontWeight: '700' },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SPACING.md,
    gap: 6,
  },
  dot: { height: 6, borderRadius: 3 },
  dotActive: { width: 20, backgroundColor: COLORS.dark },
  dotInactive: { width: 6, backgroundColor: COLORS.border },

  // Car card
  carCard: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  carHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  editLink: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.dark,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  carBody: { flexDirection: 'row', alignItems: 'center', gap: SPACING.md },
  carIconBox: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carIcon: { fontSize: 32 },
  carInfo: { flex: 1 },
  carTitle: { ...TYPOGRAPHY.h3, color: COLORS.textPrimary },
  carMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginTop: SPACING.xs,
  },
  plate: {
    backgroundColor: COLORS.dark,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: RADIUS.sm,
  },
  plateText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textOnDark,
    fontWeight: '800',
  },
  year: { ...TYPOGRAPHY.bodySmall, color: COLORS.textSecondary },

  // Actions
  actionsCard: {
    backgroundColor: COLORS.background,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  sectionLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginBottom: SPACING.md,
    marginLeft: SPACING.xs,
  },
  primaryAction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    gap: SPACING.md,
    marginBottom: SPACING.md,
  },
  primaryActionIcon: { fontSize: 28 },
  actionTextWrap: { flex: 1 },
  primaryActionTitle: { ...TYPOGRAPHY.h3, color: COLORS.textOnDark },
  primaryActionSubtitle: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textOnDark,
    opacity: 0.7,
    marginTop: 2,
  },
  chevron: { fontSize: 20, color: COLORS.textOnDark, fontWeight: '700' },
  secondaryAction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    gap: SPACING.md,
    marginBottom: SPACING.sm,
  },
  secondaryIcon: { fontSize: 24 },
  secondaryTitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
  secondarySubtitle: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  chevronDark: { fontSize: 20, color: COLORS.dark, fontWeight: '700' },
});