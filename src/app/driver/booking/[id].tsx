import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../../../constants';

export default function BookingDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.topTitle}>Booking</Text>
        <View style={styles.backBtn} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.statusCard}>
          <Text style={styles.statusLabel}>STATUS</Text>
          <Text style={styles.statusValue}>Active</Text>
          <Text style={styles.statusText}>
            Your booking is currently active
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Details</Text>
          <Row label="Spot" value="Green Valley Garage" />
          <Row label="Address" value="123 Main St, Dhaka" />
          <Row label="Date" value="Today, 3:00 PM" />
          <Row label="Duration" value="2 hours" />
          <Row label="Total" value="৳110" />
          <Row label="Booking ID" value={id ?? '—'} />
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.cta}
          onPress={() => router.push(`/driver/navigation/${id}` as any)}
        >
          <Text style={styles.ctaText}>Navigate to spot →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
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
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: { fontSize: 24, color: COLORS.textPrimary },
  topTitle: { ...TYPOGRAPHY.h3, color: COLORS.textPrimary },

  scroll: {
    padding: SPACING.lg,
    paddingBottom: SPACING.xxl,
    gap: SPACING.md,
  },

  statusCard: {
    backgroundColor: COLORS.dark,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
  },
  statusLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textOnDark,
    opacity: 0.6,
  },
  statusValue: {
    ...TYPOGRAPHY.h1,
    color: COLORS.textOnDark,
    marginTop: SPACING.xs,
  },
  statusText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textOnDark,
    opacity: 0.7,
    marginTop: SPACING.xs,
  },

  card: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
  },
  sectionTitle: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.sm,
  },
  rowLabel: { ...TYPOGRAPHY.bodySmall, color: COLORS.textSecondary },
  rowValue: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textPrimary,
    fontWeight: '600',
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