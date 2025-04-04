import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="[role]"
        options={{
          presentation: 'card',
        }}
      />
      <Stack.Screen 
        name="signup"
        options={{
          presentation: 'card',
        }}
      />
    </Stack>
  );
}