import ThemeContext from '../../context/ThemeContext'
import MainHomePage from '../MainHomePage'
import Header from '../Header'
import Slider from '../Slider'
import HomeBackGroundContainer from './StyledComponents'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {themeStatus} = value
      return (
        <HomeBackGroundContainer themeStatus={themeStatus} data-testid="home">
          <Header />
          <div className="non-header-sub-container">
            <Slider />
            <MainHomePage />
          </div>
        </HomeBackGroundContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
