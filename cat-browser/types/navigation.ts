import { Cat } from '../data/cats'

export type DrawerParamList = {
  Home: undefined
  About: undefined
}

export type StackParamList = {
  TabGroup: undefined
  CatDetail: { cat: Cat }
}

export type TabParamList = {
  Cats: undefined
  Favorites: undefined
}
