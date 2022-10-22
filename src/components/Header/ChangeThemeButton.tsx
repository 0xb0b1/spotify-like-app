import { useState } from 'react'
import { RiToggleFill, RiToggleLine } from 'react-icons/ri'

export const ChangeThemeButton = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <button className='flex items-center ml-auto' onClick={() => setDarkTheme(!darkTheme)}>
      {darkTheme ? <RiToggleLine size={28} /> : <RiToggleFill size={28} />}
    </button>
  )
}
