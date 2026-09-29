import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../../../components/Button';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../../../constants';

export default function BookingConfirm() {
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    // TODO: call API to create booking
    setTimeout(() => {
      setLoading(false);
      router.replace('/driver/bookings');
    }, 1200);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.topTitle}>Confirm Booking</Text>
        <View style={styles.backBtn} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Parking Spot</Text>
          <Row label="Name" value="Green Valley Garage" />
          <Row label="Address" value="123 Main St, Dhaka" />
          <Row label="Date" value="Today, 3:00 PM" />
          <Row label="Duration" value="2 hours" />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Payment</Text>
          <Row label="Rate" value="৳50 / hour" />
          <Row label="Subtotal" value="৳100" />
          <Row label="Service fee" value="৳10" />
          <View style={styles.divider} />
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>৳110</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <PrimaryButton
          label="Confirm & Pay"
          onPress={handleConfirm}
          loading={loading}
        />
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
  backBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  backText: { fontSize: 24, color: COLORS.textPrimary },
  topTitle: { ...TYPOGRAPHY.h3, color: COLORS.textPrimary },

  scroll: { padding: SPACING.lg, paddingBottom: SPACING.xxl, gap: SPACING.md },
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
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.sm,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: SPACING.sm,
  },
  totalLabel: { ...TYPOGRAPHY.h3, color: COLORS.textPrimary },
  totalValue: { ...TYPOGRAPHY.h3, color: COLORS.textPrimary },

  bottomBar: { padding: SPACING.lg },
});