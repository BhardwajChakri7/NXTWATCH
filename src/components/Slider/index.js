import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import {
  MainSliderContainer,
  SliderMainHeading,
  UserDetailsMainHeading,
  UserDetailsSocialMediaPara,
  EachListMainItem,
  StyledHiFire,
  StyledFaHeart,
  StyledAiFillHome,
  StyledPiListPlusBold,
} from './StyledComponents'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Slider extends Component {
  render() {
    const {location} = this.props
    return (
      <ThemeContext.Consumer>
        {value => {
          const {themeStatus} = value
          return (
            <MainSliderContainer themeStatus={themeStatus}>
              <ul className="slider-unordered-list">
                <Link to="/" className="each-link-container">
                  <EachListMainItem
                    onActive={location.pathname === '/'}
                    themeStatus={themeStatus}
                  >
                    <StyledAiFillHome
                      themeStatus={themeStatus}
                      onActive={location.pathname === '/'}
                    />
                    <SliderMainHeading
                      themeStatus={themeStatus}
                      onActive={location.pathname === '/'}
                    >
                      Home
                    </SliderMainHeading>
                  </EachListMainItem>
                </Link>
                <Link to="/trending" className="each-link-container">
                  <EachListMainItem
                    onActive={location.pathname === '/trending'}
                    themeStatus={themeStatus}
                  >
                    <StyledHiFire
                      themeStatus={themeStatus}
                      onActive={location.pathname === '/trending'}
                    />
                    <SliderMainHeading
                      themeStatus={themeStatus}
                      onActive={location.pathname === '/trending'}
                    >
                      Trending
                    </SliderMainHeading>
                  </EachListMainItem>
                </Link>
                <Link to="/gaming" className="each-link-container">
                  <EachListMainItem
                    onActive={location.pathname === '/gaming'}
                    themeStatus={themeStatus}
                  >
                    <StyledFaHeart
                      themeStatus={themeStatus}
                      onActive={location.pathname === '/gaming'}
                    />
                    <SliderMainHeading themeStatus={themeStatus}>
                      Gaming
                    </SliderMainHeading>
                  </EachListMainItem>
                </Link>

                <Link to="/saved-videos" className="each-link-container">
                  <EachListMainItem
                    onActive={location.pathname === '/saved-videos'}
                    themeStatus={themeStatus}
                  >
                    <StyledPiListPlusBold
                      themeStatus={themeStatus}
                      onActive={location.pathname === '/saved-videos'}
                    />
                    <SliderMainHeading themeStatus={themeStatus}>
                      Saved videos
                    </SliderMainHeading>
                  </EachListMainItem>
                </Link>
              </ul>
              <div>
                <UserDetailsMainHeading themeStatus={themeStatus}>
                  CONTACT US
                </UserDetailsMainHeading>
                <ul className="user-details-social-media-logos-unordered-list">
                  <li>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                      className="user-details-social-media-logo"
                    />
                  </li>
                  <li>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                      className="user-details-social-media-logo"
                    />
                  </li>
                  <li>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linkedin logo"
                      className="user-details-social-media-logo"
                    />
                  </li>
                </ul>
                <UserDetailsSocialMediaPara themeStatus={themeStatus}>
                  Enjoy! Now you can see your recommendations!
                </UserDetailsSocialMediaPara>
              </div>
            </MainSliderContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(Slider)
