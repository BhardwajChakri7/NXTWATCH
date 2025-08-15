import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import FailureView from '../FailureView'
import LoaderAni from '../LoaderAni'
import ThemeContext from '../../context/ThemeContext'
import DisplayEachVideoTrendingSection from '../DisplayEachVideoTrendingSection'
import Header from '../Header'
import Slider from '../Slider'
import {
  TrendingContainer,
  TrendingMainHeader,
  TrendingFireLogoContainer,
  TrendingVideosPageHeading,
  AllTrendingVideosUnorderedList,
} from './StyledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideosPage extends Component {
  state = {topTrendingVideos: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTopTrendingVideos()
  }

  getTopTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
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
      const backendData = fetchedData.videos
      const data = backendData.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channelName: eachVideo.channel.name,
        channelProfileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        topTrendingVideos: data,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderSuccessView = () => {
    const {topTrendingVideos} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {themeStatus} = value
          return (
            <TrendingContainer data-testid="trending" themeStatus={themeStatus}>
              <TrendingMainHeader themeStatus={themeStatus}>
                <TrendingFireLogoContainer themeStatus={themeStatus}>
                  <HiFire className="trending-fire-logo" />
                </TrendingFireLogoContainer>
                <TrendingVideosPageHeading themeStatus={themeStatus}>
                  Trending
                </TrendingVideosPageHeading>
              </TrendingMainHeader>
              <AllTrendingVideosUnorderedList themeStatus={themeStatus}>
                {topTrendingVideos.map(eachVideo => (
                  <DisplayEachVideoTrendingSection
                    eachVideo={eachVideo}
                    key={eachVideo.id}
                  />
                ))}
              </AllTrendingVideosUnorderedList>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  onRetry = () => {
    this.getTopTrendingVideos()
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
export default TrendingVideosPage
