import styled from 'styled-components'

export const MainVideoTitleHeading = styled.h1`
color: ${props => (!props.themeStatus ? '#000000' : '#f1f5f9')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  margin-top: -1px;
  margin-bottom: -10px;
`
export const MainVideoChannelName = styled.p`
  color: ${props => (!props.themeStatus ? '#4b5460' : '#94a3b8')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  margin-bottom: -8px;
`
export const ViewsCountMainPara = styled.p`
  color: ${props => (!props.themeStatus ? '#4b5460' : '#94a3b8')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  margin-right: 30px;
`
export const ListPublishedpara = styled.li`
  list-style: square;
  color: ${props => (!props.themeStatus ? '#4b5460' : '#94a3b8')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
`
