import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set, get) => ({
      isDark: false,
      
      toggleTheme: () => {
        const newTheme = !get().isDark;
        set({ isDark: newTheme });
        
        // Update document class for immediate effect
        if (newTheme) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },
      
      setTheme: (isDark) => {
        set({ isDark });
        
        // Update document class for immediate effect
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },
      
      initializeTheme: () => {
        const { isDark } = get();
        
        // Check system preference if no stored preference
        if (isDark === null) {
          const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          get().setTheme(systemPrefersDark);
        } else {
          // Apply stored theme
          if (isDark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      }
    }),
    {
      name: 'theme-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useThemeStore;