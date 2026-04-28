import { ComponentProps } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import CatsScreen from '../screens/CatsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import CatDetailScreen from '../screens/CatDetailScreen'
import AboutScreen from '../screens/AboutScreen'
import { StackParamList, TabParamList, DrawerParamList } from '../types/navigation'

type IoniconName = ComponentProps<typeof Ionicons>['name']

const Stack = createNativeStackNavigator<StackParamList>()
const Tab = createBottomTabNavigator<TabParamList>()
const Drawer = createDrawerNavigator<DrawerParamList>()

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: IoniconName
          if (route.name === 'Cats') {
            iconName = focused ? 'paw' : 'paw-outline'
          } else {
            iconName = focused ? 'heart' : 'heart-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#ff6b6b',
      })}
    >
      <Tab.Screen name="Cats" component={CatsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  )
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabGroup" component={TabGroup} options={{ headerShown: false }} />
      <Stack.Screen name="CatDetail" component={CatDetailScreen} />
    </Stack.Navigator>
  )
}

export default function Navigation() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}
