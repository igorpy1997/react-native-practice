import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { DrawerParamList } from '../types/navigation'

type AboutNavProp = DrawerNavigationProp<DrawerParamList, 'About'>

export default function AboutScreen() {
  const navigation = useNavigation<AboutNavProp>()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'About',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Text style={{ fontSize: 24, marginLeft: 8 }}>☰</Text>
        </TouchableOpacity>
      ),
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐱 Cat Browser</Text>
      <Text style={styles.text}>Find your favorite cats!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
})
