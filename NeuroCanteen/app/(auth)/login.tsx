import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <ArrowLeft color="#000000" size={24} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              secureTextEntry
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => router.push('/(tabs)')}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 24,
    zIndex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    paddingTop: 120,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    color: '#000000',
    marginBottom: 48,
  },
  form: {
    gap: 24,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#000000',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 16,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  forgotPassword: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#FF4B3A',
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: '#FF4B3A',
    paddingVertical: 20,
    borderRadius: 30,
    marginTop: 24,
  },
  loginButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});