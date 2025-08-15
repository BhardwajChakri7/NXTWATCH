import styled from 'styled-components'

const HomeBackGroundContainer = styled.div`
  background-color: ${props => (props.themeStatus ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
`
export default HomeBackGroundContainer
