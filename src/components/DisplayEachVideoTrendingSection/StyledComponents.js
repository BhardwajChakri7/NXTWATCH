import styled from 'styled-components'

export const TrendingSectionListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 10px;
`
export const TrendingSectionMainHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color:${props => (props.themeStatus ? '#f1f1f1' : '#000')};;
  font-size: 25px;
`
export const ViewsCountMainPara = styled.p`
  color: ${props => (props.themeStatus ? '#f1f1f1' : '#000')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  margin-right: 30px;
`
export const ListPublishedpara = styled.li`
  list-style: square;
  color: ${props => (props.themeStatus ? '#f1f1f1' : '#000')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
`
export const TrendingPageChannelName = styled.p`
color: ${props => (props.themeStatus ? '#f1f1f1' : '#000')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  margin-right: 30px;
`
