import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import NotFound from './components/NotFound'
import TrendingVideosPage from './components/TrendingVideosPage'
import DisplaySelectedVideo from './components/DisplaySelectedVideo'
import DisplayGamingPage from './components/DisplayGamingPage'
import SavedVideos from './components/SavedVideos'
import './App.css'

class App extends Component {
  state = {themeStatus: false, savedVideoList: []}

  changeTheme = () => {
    this.setState(prevState => ({
      themeStatus: !prevState.themeStatus,
    }))
  }

  updateSavedVideos = saveVideo => {
    this.setState(prevState => {
      const alreadySaved = prevState.savedVideoList.find(
        video => video.id === saveVideo.id,
      )
      if (alreadySaved) {
        return {
          savedVideoList: prevState.savedVideoList.filter(
            video => video.id !== saveVideo.id,
          ),
        }
      }
      return {
        savedVideoList: [...prevState.savedVideoList, saveVideo],
      }
    })
  }

  render() {
    const {themeStatus, savedVideoList} = this.state
    console.log(`Selected video : ${savedVideoList}`)
    return (
      <ThemeContext.Provider
        value={{
          themeStatus,
          changeTheme: this.changeTheme,
          savedVideos: savedVideoList,
          updateSavedVideos: this.updateSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/trending"
            component={TrendingVideosPage}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={DisplaySelectedVideo}
          />
          <ProtectedRoute exact path="/gaming" component={DisplayGamingPage} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
