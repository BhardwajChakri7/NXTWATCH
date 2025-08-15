import ThemeContext from '../../context/ThemeContext'
import './index.css'
import {
  NotFoundMainParagraph,
  NotFoundMainHeading,
  NotFoundMainContainer,
} from './StyledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {themeStatus} = value
      const notFoundUrl = themeStatus
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundMainContainer themeStatus={themeStatus}>
          <img
            src={notFoundUrl}
            alt="not found"
            className="not-found-main-img"
          />
          <NotFoundMainHeading
            className="not-found-main-heading"
            themeStatus={themeStatus}
          >
            Page Not Found
          </NotFoundMainHeading>
          <NotFoundMainParagraph
            className="not-found-main-paragraph"
            themeStatus={themeStatus}
          >
            We are sorry, the page you requested could not be found.
          </NotFoundMainParagraph>
        </NotFoundMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
