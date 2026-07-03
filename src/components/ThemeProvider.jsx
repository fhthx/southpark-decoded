import { useEffect, useState } from 'react'
import { ThemeContext } from '@/hooks/use-theme'

const MODE_KEY = 'sp-theme-mode'
const CHARACTER_KEY = 'sp-character-theme'

function timeOfDayMode() {
  const hour = new Date().getHours()
  return hour >= 19 || hour < 7 ? 'dark' : 'light'
}

function initialMode() {
  try {
    const stored = localStorage.getItem(MODE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // localStorage unavailable
  }
  return timeOfDayMode()
}

function initialCharacter() {
  try {
    return localStorage.getItem(CHARACTER_KEY)
  } catch {
    return null
  }
}

export function ThemeProvider({ children }) {
  const [mode, setModeState] = useState(initialMode)
  const [character, setCharacterState] = useState(initialCharacter)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark')
  }, [mode])

  useEffect(() => {
    if (character) {
      document.documentElement.setAttribute('data-character', character)
    } else {
      document.documentElement.removeAttribute('data-character')
    }
  }, [character])

  function setMode(newMode) {
    setModeState(newMode)
    try {
      localStorage.setItem(MODE_KEY, newMode)
    } catch {
      // localStorage unavailable
    }
  }

  function setCharacter(newCharacter) {
    setCharacterState(newCharacter)
    try {
      if (newCharacter) {
        localStorage.setItem(CHARACTER_KEY, newCharacter)
      } else {
        localStorage.removeItem(CHARACTER_KEY)
      }
    } catch {
      // localStorage unavailable
    }
  }

  return (
    <ThemeContext.Provider value={{ mode, setMode, character, setCharacter }}>
      {children}
    </ThemeContext.Provider>
  )
}
