import { createContext, useContext, useState, ReactNode } from 'react'
import { Cat } from '../data/cats'

type FavoritesContextType = {
  favorites: Cat[]
  addFavorite: (cat: Cat) => void
  removeFavorite: (catId: number) => void
  isFavorite: (catId: number) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Cat[]>([])

  const addFavorite = (cat: Cat) => {
    setFavorites((prev) => {
      if (prev.find((c) => c.id === cat.id)) return prev
      return [...prev, cat]
    })
  }

  const removeFavorite = (catId: number) => {
    setFavorites((prev) => prev.filter((c) => c.id !== catId))
  }

  const isFavorite = (catId: number) => favorites.some((c) => c.id === catId)

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = (): FavoritesContextType => {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider')
  return ctx
}
