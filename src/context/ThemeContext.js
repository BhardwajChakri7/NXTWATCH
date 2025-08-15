import React from 'react'

const ThemeContext = React.createContext({
  themeStatus: false,
  changeTheme: () => {},
  savedVideos: [],
  updateSavedVideos: () => {},
})
export default ThemeContext
