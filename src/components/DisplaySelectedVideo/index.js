import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import LoaderAni from '../LoaderAni'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Slider from '../Slider'
import FailureView from '../FailureView'
import {
  ViewsCountMainPara,
  ListPublishedpara,
  MainVideoChannelName,
  MainSelectedVideoContainer,
  MainSelectedVideoTitle,
  SubscriberCount,
  MainSeperatorLine,
  MainDescription,
  LikeContent,
  LikeButtonIcon,
  DisLikeButtonIcon,
  SavedButtonIcon,
} from './StyledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class DisplaySelectedVideo extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    selectedVideo: {},
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getSelectedVideosContent()
  }

  onRetry = () => {
    this.getSelectedVideosContent()
  }

  getSelectedVideosContent = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const backendData = fetchedData.video_details
      const data = {
        id: backendData.id,
        title: backendData.title,
        videoUrl: backendData.video_url,
        thumbnailUrl: backendData.thumbnail_url,
        channelName: backendData.channel.name,
        channelProfileImageUrl: backendData.channel.profile_image_url,
        channelSubscriberCount: backendData.channel.subscriber_count,
        viewCount: backendData.view_count,
        publishedAt: backendData.published_at,
        description: backendData.description,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        selectedVideo: data,
      })
      console.log(data)
    }
  }

  likeButtonClciked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  dislikeButtonClicked = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  saveButtonIsClicked = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  renderSuccessView = () => {
    const {selectedVideo} = this.state
    const {
      title,
      videoUrl,
      channelName,
      channelProfileImageUrl,
      channelSubscriberCount,
      viewCount,
      publishedAt,
      description,
    } = selectedVideo
    const {isLiked, isDisliked, isSaved} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {themeStatus, updateSavedVideos} = value
          const onUpdateSavedVideos = () => {
            updateSavedVideos(selectedVideo)
            this.saveButtonIsClicked()
          }
          return (
            <MainSelectedVideoContainer themeStatus={themeStatus}>
              <ReactPlayer
                url={videoUrl}
                controls
                className="main-video-container"
                width="100%"
                height="100%"
              />
              <MainSelectedVideoTitle themeStatus={themeStatus}>
                {title}
              </MainSelectedVideoTitle>
              <div className="views-and-publishedAt-main-container">
                <div className="views-date-container">
                  <ViewsCountMainPara themeStatus={themeStatus}>
                    {viewCount} views
                  </ViewsCountMainPara>
                  <ListPublishedpara themeStatus={themeStatus}>
                    {publishedAt}
                  </ListPublishedpara>
                </div>
                <div className="all-buttons-container">
                  <button
                    type="button"
                    className="like-button-container"
                    onClick={this.likeButtonClciked}
                  >
                    <LikeButtonIcon
                      isLiked={isLiked}
                      themeStatus={themeStatus}
                    />
                    <LikeContent isClicked={isLiked} themeStatus={themeStatus}>
                      Like
                    </LikeContent>
                  </button>
                  <button
                    type="button"
                    className="like-button-container"
                    onClick={this.dislikeButtonClicked}
                  >
                    <DisLikeButtonIcon
                      isDisliked={isDisliked}
                      themeStatus={themeStatus}
                    />
                    <LikeContent
                      isClicked={isDisliked}
                      themeStatus={themeStatus}
                    >
                      Dislike
                    </LikeContent>
                  </button>
                  <button
                    type="button"
                    className="like-button-container"
                    onClick={onUpdateSavedVideos}
                  >
                    <SavedButtonIcon
                      isSaved={isSaved}
                      themeStatus={themeStatus}
                    />
                    <LikeContent isClicked={isSaved} themeStatus={themeStatus}>
                      {isSaved ? 'Saved' : 'Save'}
                    </LikeContent>
                  </button>
                </div>
              </div>
              <div>
                <MainSeperatorLine themeStatus={themeStatus} />
              </div>
              <div className="selected-video-all-content-main-container">
                <img
                  src={channelProfileImageUrl}
                  alt="channel img"
                  className="selected-youtube-channel-logo"
                />
                <div>
                  <MainVideoChannelName themeStatus={themeStatus}>
                    {channelName}
                  </MainVideoChannelName>
                  <SubscriberCount themeStatus={themeStatus}>
                    {channelSubscriberCount} Subcriebrs
                  </SubscriberCount>
                </div>
              </div>
              <div className="heading-subcribers-container">
                <MainDescription themeStatus={themeStatus}>
                  {description}
                </MainDescription>
              </div>
            </MainSelectedVideoContainer>
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
export default DisplaySelectedVideo
