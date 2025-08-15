import styled from 'styled-components'

export const MainFailureViewHeading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.themeStatus ? '#ffffff' : '#000000')};
`
export const MainFailureViewPara = styled.p`
  font-size: 18px;
  margin-top: -1px;
  font-family: 'Roboto';
  color:${props => (props.themeStatus ? '#f1f1f1' : '#464646')};
`
export const MainFailureViewButton = styled.button`
  height: 35px;
  width: 100px;
  border-radius: 5px;
  background-color: #4f46e5;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #ffffff;
  border: none;
  cursor: pointer;
  outline: none;
`
