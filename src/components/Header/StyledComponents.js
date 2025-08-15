import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (!props.themeStatus ? '#ffffff' : '#212121')};
  height: 10vh;
`
export const NxtWarchMainLogoImage = styled.img`
  height:30px;
  width:160px;
  margin-left:30px
`
export const ProfileMainImage = styled.img`
  height:30px;
  width:30px;
  margin-left:10px;
`
export const SecondPartContainer = styled.div`
  display:flex;
  align-items:center;
  margin-right:40px;
`
export const LogoutButtonMain = styled.button`
margin-left:20px;
  border:2px solid ${props => (props.themeStatus ? '#ffffff' : '#3b82f6')};
  height:30px;
  width:110px;
  border-radius:5px;
  color: ${props => (props.themeStatus ? '#ffffff' : '#3b82f6')};
  font-family:"Roboto";
  font-weight:500;
  font-size:20px;
  background-color:transparent;
  cursor:pointer;
`
export const MainPopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 130px;
  width: 380px;
  padding: 20px;
  background-color:${props => (props.themeStatus ? '#000000' : '#ffffff')};
  border-radius: 3px;
  box-shadow: 0px 0px 2px 0px ${props =>
    props.themeStatus ? '#000000' : '#ffffff'};
`
export const PopUpMainHeading = styled.h1`
  color: ${props => (!props.themeStatus ? '#000000' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 20px;
`
export const MainCancelButton = styled.button`
  border: 1px solid ${props => (!props.themeStatus ? '#000000' : '#ffffff')};
  background-color: transparent;
  height: 30px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color:${props => (!props.themeStatus ? '#000000' : '#ffffff')};
  width: 70px;
  border-radius: 2px;
  margin-right: 10px;
  cursor: pointer;
`
