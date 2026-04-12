import Navigation from '../navigation/Navigation'
import { FavoritesProvider } from '../context/FavoritesContext'

export default function App() {
  return (
    <FavoritesProvider>
      <Navigation />
    </FavoritesProvider>
  )
}