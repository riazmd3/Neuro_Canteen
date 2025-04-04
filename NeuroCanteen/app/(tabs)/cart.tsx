import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Minus, Plus, ArrowRight } from 'lucide-react-native';

const cartItems = [
  {
    id: 1,
    name: 'Veggie tomato mix',
    price: 9.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Spicy fish sauce',
    price: 12.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function CartScreen() {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cart</Text>
      </View>

      <ScrollView style={styles.cartItems}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
              <View style={styles.quantityControls}>
                <TouchableOpacity style={styles.quantityButton}>
                  <Minus size={20} color="#FF4B3A" />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity style={styles.quantityButton}>
                  <Plus size={20} color="#FF4B3A" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
          <ArrowRight color="#FFFFFF" size={20} />
        </TouchableOpacity>
      </View>
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
    color: '#1E1E1E',
  },
  cartItems: {
    padding: 24,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  itemName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1E1E1E',
  },
  itemPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#FF4B3A',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#FFF0EE',
    padding: 8,
    borderRadius: 20,
  },
  quantity: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginHorizontal: 16,
  },
  footer: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  totalLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#1E1E1E',
  },
  totalAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#FF4B3A',
  },
  checkoutButton: {
    backgroundColor: '#FF4B3A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 30,
  },
  checkoutText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
    marginRight: 8,
  },
});