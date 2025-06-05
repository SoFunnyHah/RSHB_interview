import { create } from 'zustand'
import { Item, RawItem } from '../types/Item'

interface AppState {
  items: Item[]
  isLoading: boolean
  loadData: () => void
}

const rawData: RawItem[] = [
  { id: 1, type: "dir", parentId: null, name: "Ваши файлы", isFavorite: false },
  { id: 2, type: "dir", parentId: 1, name: "second", isFavorite: false },
  { id: 3, type: "dir", parentId: 1, name: "test", isFavorite: true },
  { id: 4, type: "dir", parentId: 1, name: "third", isFavorite: false },
  { id: 5, type: "file", parentId: 1, name: "photo.jpg", isFavorite: true },
  { id: 6, type: "dir", parentId: 2, name: "Вложенная папка", isFavorite: false },
  { id: 7, type: "dir", parentId: 6, name: "Глубокое вложение", isFavorite: false },
]

export const useAppStore = create<AppState>((set) => ({
  items: [],
  isLoading: false,

loadData: () => {
  set({ isLoading: true })

  setTimeout(() => {
    const itemMap = new Map<number, Item>()
    const rootItems: Item[] = []

    rawData.forEach(row => {
      const item = new Item(row)
      itemMap.set(item.id, item)

      if (item.parentId === null) {
        rootItems.push(item)
      } else {
        const parent = itemMap.get(item.parentId)
        if (parent) {
          parent.children.push(item)
        }
      }
    })

    set({ items: Array.from(itemMap.values()), isLoading: false })
  }, 1000)
}
}))
