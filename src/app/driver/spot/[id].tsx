import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../../../constants';

export default function SpotDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.topTitle}>Spot Detail</Text>
        <View style={styles.backBtn} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.imageBox}>
          <Text style={styles.imageIcon}>🅿️</Text>
        </View>

        <Text style={styles.title}>Green Valley Garage</Text>
        <Text style={styles.address}>123 Main St, Dhaka</Text>

        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Price / hr</Text>
            <Text style={styles.infoValue}>৳50</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Spots</Text>
            <Text style={styles.infoValue}>8 / 10</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionText}>
          Covered garage with 24/7 security, CCTV surveillance, and easy access
          from the main road. Ideal for both short and long-term parking.
        </Text>

        <Text style={styles.detailMuted}>Spot ID: {id}</Text>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.cta}
          onPress={() => router.push('/driver/booking/confirm')}
        >
          <Text style={styles.ctaText}>Book this spot</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  backText: { fontSize: 24, color: COLORS.textPrimary },
  topTitle: { ...TYPOGRAPHY.h3, color: COLORS.textPrimary },

  scroll: { padding: SPACING.lg, paddingBottom: SPACING.xxl },
  imageBox: {
    height: 180,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  },
  imageIcon: { fontSize: 64 },

  title: { ...TYPOGRAPHY.h1, color: COLORS.textPrimary },
  address: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
    marginBottom: SPACING.lg,
  },

  infoRow: { flexDirection: 'row', gap: SPACING.md, marginBottom: SPACING.lg },
  infoBox: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
  },
  infoLabel: { ...TYPOGRAPHY.caption, color: COLORS.textSecondary },
  infoValue: {
    ...TYPOGRAPHY.h2,
    color: COLORS.textPrimary,
    marginTop: SPACING.xs,
  },

  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  sectionText: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  detailMuted: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textMuted,
    marginTop: SPACING.lg,
  },

  bottomBar: { padding: SPACING.lg },
  cta: {
    backgroundColor: COLORS.dark,
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.lg,
    alignItems: 'center',
  },
  ctaText: { ...TYPOGRAPHY.button, color: COLORS.textOnDark },
});