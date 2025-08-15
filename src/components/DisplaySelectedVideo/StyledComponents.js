import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'
import styled from 'styled-components'

export const MainSelectedVideoContainer = styled.div`
  flex: 1; /* Grow to fill available space */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px;
  box-sizing: border-box;
  overflow-y: auto;
  height: calc(100vh - 74px);
  max-width: 100%;
  background-color: ${props =>
    !props.themeStatus ? '#fff' : '#000'}; /* Optional: Set background */
`
export const MainSelectedVideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-style: normal;
  color: ${props => (props.themeStatus ? '#fff' : '#000')};
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
export const MainVideoChannelName = styled.p`
  color: ${props => (props.themeStatus ? '#f1f1f1' : '#000000')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  margin-bottom: -8px;
`
export const SubscriberCount = styled.p`
font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
    color: ${props => (props.themeStatus ? '#f1f1f1' : '#000000')};
`
export const MainDescription = styled.p`
font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
    color: ${props => (props.themeStatus ? '#f1f1f1' : '#000000')};

`
export const MainSeperatorLine = styled.p`
  border-top: 1.5px solid ${props =>
    props.themeStatus ? '#f1f1f1' : '#000000'};

`
export const LikeContent = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => {
    if (props.isClicked) {
      return '#3b82f6' // clicked color
    }
    return !props.themeStatus ? '#000000' : '#f1f1f1' // normal based on theme
  }};
  cursor: pointer;
`

export const LikeButtonIcon = styled(BiLike)`
  font-size: 22px;
  margin-right: 4px;
  padding-right: 4px;
  color: ${props => {
    if (props.isLiked) {
      return '#3b82f6'
    }
    return !props.themeStatus ? '#000000' : '#f1f1f1'
  }}`
export const DisLikeButtonIcon = styled(BiDislike)`
  font-size: 22px;
  margin-right: 4px;
  padding-right: 4px;
  color: ${props => {
    if (props.isDisliked) {
      return '#3b82f6'
    }
    return !props.themeStatus ? '#000000' : '#f1f1f1'
  }}
`
export const SavedButtonIcon = styled(RiPlayListAddLine)`
  font-size: 22px;
  margin-right: 4px;
  padding-right: 4px;
  color: ${props => {
    if (props.isSaved) {
      return '#3b82f6'
    }
    return !props.themeStatus ? '#000000' : '#f1f1f1'
  }}  
`
export const LoaderAnimation = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color:${props => (!props.themeStatus ? '#ffffff' : '#000000')};;
`
