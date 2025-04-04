import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

const orders = [
  {
    id: 1,
    name: 'Veggie tomato mix',
    status: 'Processing',
    date: 'June 2, 2023',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Egg and cucumber',
    status: 'Delivered',
    date: 'June 1, 2023',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Orders</Text>
      </View>

      <ScrollView style={styles.ordersList}>
        {orders.map((order) => (
          <TouchableOpacity key={order.id} style={styles.orderItem}>
            <Image source={{ uri: order.image }} style={styles.orderImage} />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{order.name}</Text>
              <Text style={styles.orderDate}>{order.date}</Text>
              <View style={[
                styles.statusBadge,
                order.status === 'Delivered' && styles.statusDelivered
              ]}>
                <Text style={[
                  styles.statusText,
                  order.status === 'Delivered' && styles.statusTextDelivered
                ]}>
                  {order.status}
                </Text>
              </View>
            </View>
            <ArrowRight color="#000000" size={24} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
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
  ordersList: {
    padding: 24,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  orderImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  orderInfo: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  orderName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#000000',
    marginBottom: 4,
  },
  orderDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#9A9A9D',
    marginBottom: 8,
  },
  statusBadge: {
    backgroundColor: '#FF4B3A20',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 30,
    alignSelf: 'flex-start',
  },
  statusDelivered: {
    backgroundColor: '#4CAF5020',
  },
  statusText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#FF4B3A',
  },
  statusTextDelivered: {
    color: '#4CAF50',
  },
});