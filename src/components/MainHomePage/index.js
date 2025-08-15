import {Component} from 'react'
import Cookies from 'js-cookie'
import {CiSearch} from 'react-icons/ci'
import FailureView from '../FailureView'
import LoaderAni from '../LoaderAni'
import ThemeContext from '../../context/ThemeContext'
import PremiumAddPage from '../PremiumAddPage'
import EachVideoDetails from '../EachVideoDetails'
import {
  InputSearchElement,
  MainNoSearchResultsPara,
  MainNoSearchResultsHeading,
  MainSearchContainer,
  SearchButtonElement,
  MainHomePageContainer,
} from './StyledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class MainHomePage extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    premimumNote: true,
    userInput: '',
    allVideoDetails: [],
  }

  componentDidMount() {
    this.mainHomePageHandleSearch()
  }

  mainHomePageHandleInput = event => {
    this.setState({userInput: event.target.value})
  }

  removeTakePremiumAdd = () => {
    this.setState({premimumNote: false})
  }

  onRetry = () => {
    this.mainHomePageHandleSearch()
  }

  mainHomePageHandleSearch = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {userInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${userInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const mergedVideoDetails = fetchedData.videos.map(video => ({
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
        channelName: video.channel.name,
        channelProfileImageUrl: video.channel.profile_image_url,
      }))
      this.setState({
        allVideoDetails: mergedVideoDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else if (response.status === 401) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {allVideoDetails} = this.state
    return (
      <>
        {allVideoDetails.length === 0 ? (
          <div className="mainNoSearchResultsFound">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="no-search-results-found"
            />
            <MainNoSearchResultsHeading>
              No Search Results Found
            </MainNoSearchResultsHeading>
            <MainNoSearchResultsPara>
              Try different keywords or remove the search filter.
            </MainNoSearchResultsPara>
          </div>
        ) : (
          <div className="all-videos-main-container-list-container">
            <ul className="all-videos-container-unordered-list">
              {allVideoDetails.map(video => (
                <EachVideoDetails key={video.id} video={video} />
              ))}
            </ul>
          </div>
        )}
      </>
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
    const {premimumNote, userInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {themeStatus} = value
          return (
            <MainHomePageContainer themeStatus={themeStatus} data-testid="home">
              {premimumNote && (
                <PremiumAddPage
                  data-testid="banner"
                  removeTakePremiumAdd={this.removeTakePremiumAdd}
                />
              )}
              <div className="homePageAllVideosContainer">
                <MainSearchContainer>
                  <InputSearchElement
                    type="search"
                    themeStatus={themeStatus}
                    placeholder="Search"
                    onChange={this.mainHomePageHandleInput}
                    value={userInput}
                  />
                  <SearchButtonElement
                    themeStatus={themeStatus}
                    type="button"
                    data-testid="searchButton"
                    onClick={this.mainHomePageHandleSearch}
                  >
                    <CiSearch className="react-search-icon" />
                  </SearchButtonElement>
                </MainSearchContainer>
                {this.renderingTheBasedOnApiStatus()}
              </div>
            </MainHomePageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default MainHomePage
