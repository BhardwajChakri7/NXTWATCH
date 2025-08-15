import styled from 'styled-components'

export const LoaderAnimation = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:90vw;
  height:90vh;
  background-color:${props => (!props.themeStatus ? '#ffffff' : '#000000')};
`
