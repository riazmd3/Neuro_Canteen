import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';

export default function LoginScreen() {
  const router = useRouter();
  const { role } = useLocalSearchParams();
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login logic will be implemented later
    console.log('Login attempted with:', { employeeId, password });
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft color="#0F5132" size={24} />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.title}>Neuro Foundation</Text>
          <Text style={styles.subtitle}>Committed to Neuro Sciences</Text>
        </View>

        <View style={styles.tabs}>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabTextActive}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.tab}
            onPress={() => router.push('/(auth)/signup')}
          >
            <Text style={styles.tabText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Employee ID</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your ID"
              value={employeeId}
              onChangeText={setEmployeeId}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.rememberContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 24,
    zIndex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#0F5132',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#374151',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabActive: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#0F5132',
  },
  tabText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#6B7280',
  },
  tabTextActive: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#0F5132',
  },
  form: {
    padding: 24,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
  forgotPassword: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#0F5132',
  },
  loginButton: {
    backgroundColor: '#0F5132',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  loginButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginHorizontal: 16,
  },
});