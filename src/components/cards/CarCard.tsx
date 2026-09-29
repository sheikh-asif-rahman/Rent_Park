import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../../constants';

export type Car = {
  make: string;
  model: string;
  plate: string;
  color?: string;
  year?: string;
};

type Props = {
  car: Car;
  onPressEdit?: () => void;
};

export default function CarCard({ car, onPressEdit }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.label}>MY VEHICLE</Text>
        {onPressEdit && (
          <TouchableOpacity onPress={onPressEdit}>
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.body}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>🚗</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>
            {car.make} {car.model}
          </Text>
          <View style={styles.metaRow}>
            <View style={styles.plate}>
              <Text style={styles.plateText}>{car.plate}</Text>
            </View>
            {car.year && <Text style={styles.year}>{car.year}</Text>}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  label: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
  },
  edit: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.dark,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { fontSize: 32 },
  info: { flex: 1 },
  title: {
    ...TYPOGRAPHY.h3,
    color: COLORS.textPrimary,
  },
  metaRow: {
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
  year: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
  },
});