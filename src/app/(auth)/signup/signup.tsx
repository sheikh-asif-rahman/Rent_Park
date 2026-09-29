import { router } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../../../components/Button';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../../../constants';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    setLoading(true);
    console.log('Signing up:', { name, email, password });
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Create account</Text>
          <Text style={styles.subtitle}>
            Join Rent_Park and start exploring
          </Text>

          <View style={styles.form}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="John Doe"
                placeholderTextColor={COLORS.textMuted}
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="you@example.com"
                placeholderTextColor={COLORS.textMuted}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={COLORS.textMuted}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
          </View>

          {/* ⚫ Primary Button */}
          <PrimaryButton
            label="Create Account"
            onPress={handleSignUp}
            loading={loading}
            style={styles.buttonSpacing}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/signin')}>
              <Text style={styles.footerLink}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  flex: { flex: 1 },
  scroll: {
    flexGrow: 1,
    padding: SPACING.lg,
    justifyContent: 'center',
  },
  title: { ...TYPOGRAPHY.h1, color: COLORS.textPrimary },
  subtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
    marginBottom: SPACING.xl,
  },
  form: { gap: SPACING.md },
  inputWrapper: { gap: SPACING.xs },
  label: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textPrimary,
    marginLeft: SPACING.xs,
    fontWeight: '600',
  },
  input: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    ...TYPOGRAPHY.body,
    color: COLORS.textPrimary,
  },
  buttonSpacing: {
    marginTop: SPACING.lg,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SPACING.lg,
  },
  footerText: { ...TYPOGRAPHY.bodySmall, color: COLORS.textSecondary },
  footerLink: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textPrimary,
    fontWeight: '800',
    textDecorationLine: 'underline',
  },
});