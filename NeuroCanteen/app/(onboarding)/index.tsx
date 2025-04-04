import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Foodie</Text>
        <Text style={styles.subtitle}>Your favorite foods delivered fast to your door.</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/(tabs)')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#1E1E1E',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#FF4B3A',
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 30,
    width: '100%',
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});