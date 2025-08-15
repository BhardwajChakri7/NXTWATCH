import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
background-color:${props => (props.themeStatus ? '#000' : '#fff')};
height:100vh;
background-size:cover;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundMainHeading = styled.h1`
font-family: 'Roboto';
  font-size: 35px;
  font-weight: 500;
  color:${props => (!props.themeStatus ? '#000' : '#fff')};
`
export const NotFoundMainParagraph = styled.p`
 margin-top: -1px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color:${props => (!props.themeStatus ? '#000' : '#fff')};
`
