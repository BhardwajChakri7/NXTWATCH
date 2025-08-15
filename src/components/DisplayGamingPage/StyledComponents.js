import styled from 'styled-components'

export const GamingContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.themeStatus ? '#0f0f0f' : '#f9f9f9')};
`
export const LoaderAnimation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${props => (!props.themeStatus ? '#ffffff' : '#000000')};
`
export const TrendingMainHeader = styled.div`
  background-color: ${props => (!props.themeStatus ? '#f1f5f9' : '#313131')};
  width: 81vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const TrendingFireLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  background-color: ${props => (!props.themeStatus ? '#ffffff' : '#000000')};
  border-radius: 50px;
  height: 60px;
  width: 60px;
  margin-right: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
`
export const TrendingVideosPageHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.themeStatus ? '#ffffff' : '#000000')};
  font-size: 25px;
`
export const DisplayMainGamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 74px);
  background-color: ${props => (!props.themeStatus ? '#ffffff' : '#000000')};
`
