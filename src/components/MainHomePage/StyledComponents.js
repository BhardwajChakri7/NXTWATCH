import styled from 'styled-components'

export const MainHomePageContainer = styled.div`
  background-color: ${props => (props.themeStatus ? '#000000' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-y: auto;
  height: calc(100vh - 72px);
`

export const MainSearchContainer = styled.div`
  display: flex;
  width: 30vw;
  height: 30px;
  margin-top: 20px;
  margin-left: 20px;
`

export const InputSearchElement = styled.input.attrs(() => ({
  type: 'search',
}))`
  flex: 1;
  border: 1px solid ${({themeStatus}) =>
    !themeStatus ? '#000000' : '#ffffff'};
  padding-left: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: ${({themeStatus}) => (!themeStatus ? '#000000' : '#ffffff')};
  outline: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: transparent;
`

export const SearchButtonElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border: 1px solid ${({themeStatus}) =>
    !themeStatus ? '#000000' : '#ffffff'};
  border-left: none;
  background-color: ${({themeStatus}) => (themeStatus ? '#475569' : '#f9f9f9')};
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  svg {
    font-size: 18px;
    color: ${({themeStatus}) => (themeStatus ? '#000000' : '#475569')};
  }
`
export const MainNoSearchResultsHeading = styled.h1`

  font-family: 'Roboto';
  font-weight: bolder;
  font-size: 24px;
  color: #000;
`
export const MainNoSearchResultsPara = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: -1px;
  color: #000;

`
