import { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  const addFavorite = (cat) => {
    setFavorites((prev) => {
      if (prev.find((c) => c.id === cat.id)) return prev
      return [...prev, cat]
    })
  }

  const removeFavorite = (catId) => {
    setFavorites((prev) => prev.filter((c) => c.id !== catId))
  }

  const isFavorite = (catId) => favorites.some((c) => c.id === catId)

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(FavoritesContext)