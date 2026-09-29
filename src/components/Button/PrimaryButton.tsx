import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../../constants';

type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function PrimaryButton({
  label,
  onPress,
  loading = false,
  disabled = false,
  style,
  textStyle,
}: Props) {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      disabled={isDisabled}
      style={[styles.button, isDisabled && styles.disabled, style]}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.textOnDark} />
      ) : (
        <Text style={[styles.label, textStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.dark,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 52,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    ...TYPOGRAPHY.button,
    color: COLORS.textOnDark,
  },
});