import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { FavoritesProvider } from './context/FavoritesContext'
import Navigation from './navigation/Navigation'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <FavoritesProvider>
          <Navigation />
        </FavoritesProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
