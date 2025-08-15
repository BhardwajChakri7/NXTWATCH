import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  MainVideoTitleHeading,
  MainVideoChannelName,
  ViewsCountMainPara,
  ListPublishedpara,
} from './StyledComponents'
import './index.css'

class EachVideoDetails extends Component {
  render() {
    const {video} = this.props
    const {
      id,
      publishedAt,
      thumbnailUrl,
      title,
      viewCount,
      channelName,
      channelProfileImageUrl,
    } = video
    return (
      <ThemeContext.Consumer>
        {value => {
          const {themeStatus} = value
          return (
            <Link to={`/videos/${id}`} className="each-link-button">
              <li className="video-list-item">
                <img
                  src={thumbnailUrl}
                  alt="video thumbnail"
                  className="each-video-thumbnail-image"
                />
                <div className="eachvideo-all-content-main-container">
                  <div>
                    <img
                      src={channelProfileImageUrl}
                      alt="channel logo"
                      className="youtube-channel-logo"
                    />
                  </div>
                  <div>
                    <MainVideoTitleHeading themeStatus={themeStatus}>
                      {title}
                    </MainVideoTitleHeading>
                    <MainVideoChannelName themeStatus={themeStatus}>
                      {channelName}
                    </MainVideoChannelName>
                    <div className="all-views-and-publishedAt-main-container">
                      <ViewsCountMainPara themeStatus={themeStatus}>
                        {viewCount} views
                      </ViewsCountMainPara>
                      <ListPublishedpara themeStatus={themeStatus}>
                        {publishedAt}
                      </ListPublishedpara>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default EachVideoDetails
