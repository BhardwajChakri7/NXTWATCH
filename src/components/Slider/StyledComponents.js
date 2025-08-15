import {HiFire} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import {FaHeart} from 'react-icons/fa'
import {PiListPlusBold} from 'react-icons/pi'
import styled from 'styled-components'

export const MainSliderContainer = styled.div`
  width: 18vw;
  height: 90vh;
  background-color: ${props => (!props.themeStatus ? '#ffffff' : '#212121')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink:0;
`
export const SliderMainHeading = styled.h1`
  padding-top: 3px;
  color:${props => (props.themeStatus ? '#f9f9f9' : '#212121')}; 
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
`
export const UserDetailsMainHeading = styled.h1`
   padding-left: 30px;
  color: ${props => (props.themeStatus ? '#ffffff' : '#000')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 20px;
`
export const UserDetailsSocialMediaPara = styled.p`
color: ${props => (props.themeStatus ? '#ffffff' : '#000')};
  padding-left: 30px;
  font-family: 'Roboto';
  font-size: 15px;
`
export const EachListMainItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 30px;
 background-color: ${props => {
   if (!props.onActive) return 'transparent'
   if (props.themeStatus) return '#606060'
   return '#e2e8f0'
 }};

`
export const StyledHiFire = styled(HiFire)`
  color: ${props => {
    if (props.onActive) return 'red'
    return props.themeStatus ? '#909090' : '#000'
  }};
  font-size: 24px;
  margin-right: 16px;
`
export const StyledFaHeart = styled(FaHeart)`
  color: ${props => {
    if (props.onActive) return 'red'
    return props.themeStatus ? '#909090' : '#000'
  }};
  font-size: 24px;
  margin-right: 16px;
`
export const StyledAiFillHome = styled(AiFillHome)`
  color: ${props => {
    if (props.onActive) return 'red'
    return props.themeStatus ? '#909090' : '#000'
  }};
  font-size: 24px;
  margin-right: 16px;
`
export const StyledPiListPlusBold = styled(PiListPlusBold)`
  color: ${props => {
    if (props.onActive) return 'red'
    return props.themeStatus ? '#909090' : '#000'
  }};
  font-size: 24px;
  margin-right: 16px;
`
