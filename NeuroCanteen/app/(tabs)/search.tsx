import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Search as SearchIcon } from 'lucide-react-native';

const searchResults = [
  {
    id: 1,
    name: 'Veggie tomato mix',
    price: 'N1,900',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Egg and cucumber',
    price: 'N1,900',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
        <View style={styles.searchBar}>
          <SearchIcon color="#000000" size={20} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for meals..."
            placeholderTextColor="#9A9A9D"
          />
        </View>
      </View>

      <ScrollView style={styles.results}>
        {searchResults.map((item) => (
          <TouchableOpacity key={item.id} style={styles.resultItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
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
  results: {
    padding: 24,
  },
  resultItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
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
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#000000',
    marginBottom: 8,
  },
  itemPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#FF4B3A',
  },
});