import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../../../constants';

export default function DriverMap() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.topTitle}>Find Parking</Text>
        <View style={styles.backBtn} />
      </View>

      {/* Placeholder for the map */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapIcon}>🗺️</Text>
        <Text style={styles.mapTitle}>Map coming soon</Text>
        <Text style={styles.mapText}>
          Integrate MapView with CARTO tiles here
        </Text>
      </View>

      {/* Bottom CTA */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.cta}
          onPress={() => router.push('/driver/spot/1')}
        >
          <Text style={styles.ctaText}>View a Spot →</Text>
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
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: { fontSize: 24, color: COLORS.textPrimary },
  topTitle: { ...TYPOGRAPHY.h3, color: COLORS.textPrimary },

  mapPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },
  mapIcon: { fontSize: 64, marginBottom: SPACING.md },
  mapTitle: { ...TYPOGRAPHY.h2, color: COLORS.textPrimary },
  mapText: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: SPACING.sm,
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