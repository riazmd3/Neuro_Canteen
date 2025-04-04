import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Search, Filter } from 'lucide-react-native';

const categories = [
  { id: 1, name: 'Foods', active: true },
  { id: 2, name: 'Drinks', active: false },
  { id: 3, name: 'Snacks', active: false },
  { id: 4, name: 'Sauce', active: false },
];

const popularItems = [
  {
    id: 1,
    name: 'Veggie tomato mix',
    description: 'N1,900',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Egg and cucumber',
    description: 'N1,900',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Delicious{'\n'}food for you</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search color="#000000" size={20} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#000000"
          />
        </View>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity 
            key={category.id} 
            style={[
              styles.categoryItem,
              category.active && styles.categoryItemActive
            ]}
          >
            <Text style={[
              styles.categoryName,
              category.active && styles.categoryNameActive
            ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.popularItems}
      >
        {popularItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.popularItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  },
  greeting: {
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    color: '#000000',
  },
  searchContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEEEE',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginLeft: 12,
    color: '#000000',
  },
  categoriesContainer: {
    paddingLeft: 24,
    marginBottom: 24,
  },
  categoryItem: {
    marginRight: 32,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  categoryItemActive: {
    borderBottomColor: '#FF4B3A',
  },
  categoryName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#9A9A9D',
  },
  categoryNameActive: {
    color: '#FF4B3A',
  },
  popularItems: {
    paddingHorizontal: 24,
  },
  popularItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 24,
    marginRight: 24,
    alignItems: 'center',
    width: 220,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  itemImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 24,
  },
  itemName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 8,
  },
  itemPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#FF4B3A',
  },
});