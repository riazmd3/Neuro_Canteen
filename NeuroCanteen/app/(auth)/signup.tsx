import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';

export default function SignUpScreen() {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    phoneNo: '',
    department: '',
    password: '',
  });

  const handleSignUp = () => {
    // Sign up logic will be implemented later
    console.log('Sign up attempted with:', formData);
  };

  const handleBack = () => {
    // This ensures we go back to the home screen
    router.replace('/');
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
          onPress={handleBack}
        >
          <ArrowLeft color="#0F5132" size={24} />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.title}>Neuro Foundation</Text>
          <Text style={styles.subtitle}>Committed to Neuro Sciences</Text>
        </View>

        <View style={styles.tabs}>
          <TouchableOpacity 
            style={styles.tab}
            onPress={() => router.push('/(auth)/[role]')}
          >
            <Text style={styles.tabText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabTextActive}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Your name"
              value={formData.name}
              onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Employee ID</Text>
            <TextInput
              style={styles.input}
              placeholder="EMPId"
              value={formData.employeeId}
              onChangeText={(text) => setFormData(prev => ({ ...prev, employeeId: text }))}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone No</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone No"
              keyboardType="phone-pad"
              value={formData.phoneNo}
              onChangeText={(text) => setFormData(prev => ({ ...prev, phoneNo: text }))}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Department</Text>
            <TextInput
              style={styles.input}
              placeholder="Department"
              value={formData.department}
              onChangeText={(text) => setFormData(prev => ({ ...prev, department: text }))}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={formData.password}
              onChangeText={(text) => setFormData(prev => ({ ...prev, password: text }))}
            />
          </View>

          <TouchableOpacity 
            style={styles.signUpButton}
            onPress={handleSignUp}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
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
  signUpButton: {
    backgroundColor: '#0F5132',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  signUpButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});