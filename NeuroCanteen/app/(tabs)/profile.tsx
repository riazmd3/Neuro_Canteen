import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Settings, CreditCard, Bell, MapPin, ShoppingBag, LogOut } from 'lucide-react-native';

const menuItems = [
  { icon: Settings, label: 'Settings', color: '#FF4B3A' },
  { icon: CreditCard, label: 'Payment Methods', color: '#000000' },
  { icon: Bell, label: 'Notifications', color: '#000000' },
  { icon: MapPin, label: 'Delivery Address', color: '#000000' },
  { icon: ShoppingBag, label: 'Order History', color: '#000000' },
  { icon: LogOut, label: 'Log Out', color: '#FF4B3A' },
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Marvis Ighedosa</Text>
        <Text style={styles.email}>dosamarvis@gmail.com</Text>
      </View>

      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={[styles.menuIcon, { backgroundColor: `${item.color}10` }]}>
              <item.icon size={24} color={item.color} />
            </View>
            <Text style={[styles.menuLabel, { color: item.color }]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    color: '#000000',
  },
  profileSection: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#000000',
    marginBottom: 4,
  },
  email: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#9A9A9D',
  },
  menuSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    paddingHorizontal: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
});