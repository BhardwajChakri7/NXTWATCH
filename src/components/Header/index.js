import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {CiLight} from 'react-icons/ci'
import {MdDarkMode} from 'react-icons/md'
import Popup from 'reactjs-popup'
import ThemeContext from '../../context/ThemeContext'

import {
  HeaderMainContainer,
  NxtWarchMainLogoImage,
  ProfileMainImage,
  SecondPartContainer,
  LogoutButtonMain,
  MainPopUpContainer,
  PopUpMainHeading,
  MainCancelButton,
} from './StyledComponents'
import './index.css'

class Header extends Component {
  state = {toShowPopup: false}

  closePopup = () => {
    this.setState({toShowPopup: false})
  }

  PopupExample = () => {
    const {toShowPopup} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {themeStatus} = value
          return (
            <Popup
              open={toShowPopup}
              onClose={this.closePopup}
              position="top left"
            >
              <MainPopUpContainer themeStatus={themeStatus}>
                <PopUpMainHeading themeStatus={themeStatus}>
                  Are you sure you want to logout?
                </PopUpMainHeading>
                <div>
                  <MainCancelButton
                    type="button"
                    onClick={this.closePopup}
                    themeStatus={themeStatus}
                  >
                    Cancel
                  </MainCancelButton>
                  <button
                    type="button"
                    className="popup-confirm-button"
                    onClick={this.perfectLogout}
                  >
                    Confirm
                  </button>
                </div>
              </MainPopUpContainer>
            </Popup>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  perfectLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  onClickedLogoutButton = () => {
    this.setState({toShowPopup: true})
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {themeStatus, changeTheme} = value
          const logoImageUrl = !themeStatus
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <HeaderMainContainer themeStatus={themeStatus}>
              <NxtWarchMainLogoImage
                src={logoImageUrl}
                alt="website logo"
                className="nxt-watch-main-logo"
              />
              <SecondPartContainer>
                <button
                  type="button"
                  onClick={changeTheme}
                  className="main-theme-button"
                  data-testid="theme"
                >
                  {themeStatus ? (
                    <CiLight className="main-theme-img-1" />
                  ) : (
                    <MdDarkMode className="main-theme-img" />
                  )}
                </button>

                <ProfileMainImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <LogoutButtonMain
                  type="button"
                  onClick={this.onClickedLogoutButton}
                  themeStatus={themeStatus}
                >
                  Logout
                </LogoutButtonMain>
                {this.PopupExample()}
              </SecondPartContainer>
            </HeaderMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
