import ThemeContext from '../../context/ThemeContext'
import {
  MainFailureViewHeading,
  MainFailureViewPara,
  MainFailureViewButton,
} from './StyledComponents'
import './index.css'

const FailureView = props => {
  const {onRetry} = props
  const retryButtonClicked = () => {
    onRetry()
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {themeStatus} = value
        const errorViewImg =
          themeStatus === true
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <div className="mainFailureViewContainer">
            <img
              src={errorViewImg}
              alt="failure view"
              className="main-error-view-img"
            />
            <MainFailureViewHeading themeStatus={themeStatus}>
              Oops! Something Went Wrong
            </MainFailureViewHeading>
            <MainFailureViewPara themeStatus={themeStatus}>
              We are having some troule completing your request.
            </MainFailureViewPara>
            <MainFailureViewPara themeStatus={themeStatus}>
              Please try again.
            </MainFailureViewPara>
            <MainFailureViewButton type="button" onClick={retryButtonClicked}>
              Retry
            </MainFailureViewButton>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default FailureView
