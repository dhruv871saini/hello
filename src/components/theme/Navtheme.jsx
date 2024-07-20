import React from 'react'
import { useTheme } from './Themes'

const Navtheme = () => {
    const {darkMode, toggleMode}=useTheme()
  return (
    <div>
       <div className="theme-switcher">
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleMode} />
        <span className="slider round"></span>
      </label>
      <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
    </div>
  )
}

export default Navtheme
