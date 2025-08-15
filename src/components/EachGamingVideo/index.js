import {Link} from 'react-router-dom'
import {
  EachVideoGamingMainTitle,
  EachVideoGamingMainPara,
} from './StyledComponents'
import './index.css'

const EachGamingVideo = props => {
  const {eachGame} = props
  const {id, title, thumbnailUrl, viewCount} = eachGame
  return (
    <Link to={`/videos/${id}`} className="gaming-video-link">
      <li className="gamingVideoListItem">
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="eachVideoGamingThumbNailUrl"
        />
        <EachVideoGamingMainTitle>{title}</EachVideoGamingMainTitle>
        <EachVideoGamingMainPara>
          {viewCount} Watching Worldwide
        </EachVideoGamingMainPara>
      </li>
    </Link>
  )
}
export default EachGamingVideo
