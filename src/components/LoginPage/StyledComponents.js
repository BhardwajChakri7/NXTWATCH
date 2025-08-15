import styled from 'styled-components'

export const MainLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => (props.themeStatus ? '#212121' : '#ffffff')};
  align-items: center;
  height: 100vh;
  background-size: cover;
  padding: 20px;
`

export const SubLoginContainer = styled.div`
  background-color: ${props => (props.themeStatus ? '#000000' : '#ffffff')};
  box-shadow: 0px 0px 8px 0px ${props =>
    !props.themeStatus ? '#616e7c' : 'none'};
  padding: 30px;
  border-radius: 5px;

  width: 90vw;
  max-width: 360px;

  @media screen and (min-width: 768px) {
    width: 23vw;
    max-width: none;
    min-width: 300px;
    height: 50vh;
  }
`

export const LogoImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoMainImg = styled.img`
  height: 33px;
  width: 160px;
  margin-bottom: 30px;
`

export const LabelContent = styled.label`
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (!props.themeStatus ? '#94a3b8' : '#ffffff')};
`

export const InputElement = styled.input`
  width: 100%;
  height: 33px;
  border: 1px solid #94a3b8;
  border-radius: 3px;
  padding-left: 10px;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #1e293b;
  outline: none;
  margin-top: 5px;
  background-color: ${props => (props.themeStatus ? '#000000' : '#ffffff')};
  color: ${props => (props.themeStatus ? '#ffffff' : '#1e293b')};
`

export const InputElementCheckbox = styled.input`
  height: 17px;
  width: 17px;
  margin-right: 7px;
`

export const LabelContentPassword = styled.label`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (!props.themeStatus ? '#000000' : '#ffffff')};
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`

export const LoginMainButton = styled.button`
  background-color: #4f46e5;
  cursor: pointer;
  width: 100%;
  height: 33px;
  text-align: center;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-top: 30px;
`

export const ErrorMessageAlert = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  margin-top: 8px;

  ${props =>
    props.themeStatus &&
    `
    color: #ff6b6b;
  `}
`
