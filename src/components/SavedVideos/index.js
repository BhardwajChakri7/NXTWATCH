import {Component} from 'react'
import {PiListPlusBold} from 'react-icons/pi'
import ThemeContext from '../../context/ThemeContext'
import DisplayEachVideoTrendingSection from '../DisplayEachVideoTrendingSection'
import Header from '../Header'
import Slider from '../Slider'

import {
  TrendingMainHeader,
  TrendingFireLogoContainer,
  TrendingVideosPageHeading,
  AllTrendingVideosUnorderedList,
  NoSavedVideosFoundMainContainer,
  NoSavedVideosMainHeading,
  NoSavedVideosMainPara,
} from './StyledComponents'
import './index.css'

class SavedVideos extends Component {
  renderTheSavedVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {themeStatus, savedVideos} = value
        return savedVideos.length === 0 ? (
          <NoSavedVideosFoundMainContainer themeStatus={themeStatus}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
              className="no-saved-vodeos-found-img"
            />
            <NoSavedVideosMainHeading themeStatus={themeStatus}>
              No Saved Videos Found
            </NoSavedVideosMainHeading>
            <NoSavedVideosMainPara themeStatus={themeStatus}>
              You can save your videos while watching them.
            </NoSavedVideosMainPara>
          </NoSavedVideosFoundMainContainer>
        ) : (
          <div className="trendingVideosMainContainer">
            <TrendingMainHeader themeStatus={themeStatus}>
              <TrendingFireLogoContainer themeStatus={themeStatus}>
                <PiListPlusBold className="trending-fire-logo" />
              </TrendingFireLogoContainer>
              <TrendingVideosPageHeading themeStatus={themeStatus}>
                Saved Videos
              </TrendingVideosPageHeading>
            </TrendingMainHeader>
            <AllTrendingVideosUnorderedList themeStatus={themeStatus}>
              {savedVideos.map(eachVideo => (
                <DisplayEachVideoTrendingSection
                  eachVideo={eachVideo}
                  key={eachVideo.id}
                />
              ))}
            </AllTrendingVideosUnorderedList>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <div className="non-header-sub-container">
          <Slider />
          {this.renderTheSavedVideos()}
        </div>
      </>
    )
  }
}
export default SavedVideos
