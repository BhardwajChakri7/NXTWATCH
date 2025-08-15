import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  MainLoginContainer,
  SubLoginContainer,
  LogoImgContainer,
  LogoMainImg,
  LabelContent,
  InputElement,
  InputElementCheckbox,
  LabelContentPassword,
  ShowPasswordContainer,
  LoginMainButton,
  ErrorMessageAlert,
} from './StyledComponents'

class LoginPage extends Component {
  state = {
    isChecked: false,
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({errorMsg: errorMessage, showErrorMsg: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  changeCheckboxStatus = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onChangedUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangedPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isChecked, showErrorMsg, errorMsg, username, password} =
            this.state
          const {themeStatus} = value
          const passwordType = isChecked ? 'text' : 'password'
          const logoImageUrl = !themeStatus
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <MainLoginContainer themeStatus={themeStatus}>
              <SubLoginContainer themeStatus={themeStatus}>
                <LogoImgContainer>
                  <LogoMainImg src={logoImageUrl} alt="website logo" />
                </LogoImgContainer>
                <form onSubmit={this.submitForm}>
                  <LabelContent
                    htmlFor="username-element"
                    themeStatus={themeStatus}
                  >
                    USERNAME
                  </LabelContent>
                  <br />
                  <InputElement
                    type="text"
                    id="username-element"
                    placeholder="Username"
                    themeStatus={themeStatus}
                    onChange={this.onChangedUsername}
                    value={username}
                  />
                  <br />
                  <br />
                  <LabelContent
                    htmlFor="username-element"
                    themeStatus={themeStatus}
                  >
                    PASSWORD
                  </LabelContent>
                  <br />
                  <InputElement
                    type={passwordType}
                    id="username-element"
                    placeholder="Password"
                    themeStatus={themeStatus}
                    onChange={this.onChangedPassword}
                    value={password}
                  />
                  <br />
                  <ShowPasswordContainer>
                    <InputElementCheckbox
                      type="checkbox"
                      onChange={this.changeCheckboxStatus}
                      id="show-pass-element"
                      themeStatus={themeStatus}
                    />
                    <LabelContentPassword
                      htmlFor="show-pass-element"
                      themeStatus={themeStatus}
                    >
                      Show Password
                    </LabelContentPassword>
                  </ShowPasswordContainer>
                  <LoginMainButton type="submit">Login</LoginMainButton>
                  {showErrorMsg && (
                    <ErrorMessageAlert className="error-alert">
                      *{errorMsg}
                    </ErrorMessageAlert>
                  )}
                </form>
              </SubLoginContainer>
            </MainLoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default LoginPage
