import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  ViewsCountMainPara,
  ListPublishedpara,
  TrendingSectionListItem,
  TrendingSectionMainHeading,
  TrendingPageChannelName,
} from './StyledComponents'
import './index.css'

const DisplayEachVideoTrendingSection = props => {
  const {eachVideo} = props
  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    channelProfileImageUrl,
    viewCount,
    publishedAt,
  } = eachVideo
  return (
    <ThemeContext.Consumer>
      {value => {
        const {themeStatus} = value

        return (
          <Link to={`/videos/${id}`} className="trendingPageLinkContainer">
            <TrendingSectionListItem themeStatus={themeStatus}>
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="main-thumbnailUrl-img"
              />
              <div className="trendingSectionAllDetails">
                <TrendingSectionMainHeading themeStatus={themeStatus}>
                  {title}
                </TrendingSectionMainHeading>
                <div className="trendingSectionChannelLogoContainer">
                  <img
                    src={channelProfileImageUrl}
                    alt="channel logo"
                    className="trendingSectionChannelLogo"
                  />
                  <TrendingPageChannelName themeStatus={themeStatus}>
                    {channelName}
                  </TrendingPageChannelName>
                </div>
                <div className="trending-section-views-publishedAt-container">
                  <ViewsCountMainPara themeStatus={themeStatus}>
                    {viewCount} views
                  </ViewsCountMainPara>
                  <ListPublishedpara themeStatus={themeStatus}>
                    {publishedAt}
                  </ListPublishedpara>
                </div>
              </div>
            </TrendingSectionListItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default DisplayEachVideoTrendingSection
