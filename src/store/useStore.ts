import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface StoreState {
  language: 'en' | 'hi'
  setLanguage: (lang: 'en' | 'hi') => void
  userId: string | null
  setUserId: (id: string | null) => void
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
      userId: null, 
      setUserId: (id) => set({ userId: id }),
    }),
    {
      name: 'formiq-storage',
    }
  )
)
