import { useLayoutEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useFavorites } from '../context/FavoritesContext'

export default function CatDetailScreen() {
  const navigation = useNavigation()
  const route = useRoute()
  const { cat } = route.params
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()

  const favorite = isFavorite(cat.id)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: cat.name,
      headerRight: () => (
        <TouchableOpacity onPress={() => favorite ? removeFavorite(cat.id) : addFavorite(cat)}>
          <Text style={{ fontSize: 24 }}>{favorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      )
    })
  }, [favorite])

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', backgroundColor: '#f0f0f0' }}>
        <Image
          source={{ uri: cat.image }}
          style={{ width: 300, height: 400 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{cat.name}</Text>
        <Text style={styles.breed}>{cat.breed} • {cat.age} y.o.</Text>
        <Text style={styles.description}>{cat.description}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  info: {
    padding: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  breed: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  description: {
    fontSize: 16,
    marginTop: 16,
    lineHeight: 24,
  },
})