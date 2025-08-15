import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import LoaderAnimation from './StyledComponents'

const LoaderAni = () => (
  <ThemeContext.Consumer>
    {value => {
      const {themeStatus} = value
      return (
        <LoaderAnimation themeStatus={themeStatus} data-testid="loader">
          <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </LoaderAnimation>
      )
    }}
  </ThemeContext.Consumer>
)
export default LoaderAni
