import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {
  TrendingVideosPageHeading,
  TrendingMainHeader,
  TrendingFireLogoContainer,
  DisplayMainGamingContainer,
} from './StyledComponents'
import LoaderAni from '../LoaderAni'
import FailureView from '../FailureView'
import ThemeContext from '../../context/ThemeContext'
import EachGamingVideo from '../EachGamingVideo'
import Header from '../Header'
import Slider from '../Slider'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class DisplayGamingPage extends Component {
  state = {apiStatus: apiStatusConstants.initial, allGamingVideos: []}

  componentDidMount() {
    this.getGamingDetails()
  }

  onRetry = () => {
    this.getGamingDetails()
  }

  getGamingDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const data = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        allGamingVideos: data,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderSuccessView = () => {
    const {allGamingVideos} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {themeStatus} = value
          return (
            <DisplayMainGamingContainer themeStatus={themeStatus}>
              <div>
                <TrendingMainHeader themeStatus={themeStatus}>
                  <TrendingFireLogoContainer themeStatus={themeStatus}>
                    <SiYoutubegaming className="trending-fire-logo" />
                  </TrendingFireLogoContainer>
                  <TrendingVideosPageHeading themeStatus={themeStatus}>
                    Gaming
                  </TrendingVideosPageHeading>
                </TrendingMainHeader>
              </div>
              <ul className="allGamingVideosUnorderList">
                {allGamingVideos.map(eachGame => (
                  <EachGamingVideo eachGame={eachGame} key={eachGame.id} />
                ))}
              </ul>
            </DisplayMainGamingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderLoadingView = () => <LoaderAni />

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderingTheBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="non-header-sub-container">
          <Slider />
          {this.renderingTheBasedOnApiStatus()}
        </div>
      </>
    )
  }
}
export default DisplayGamingPage
