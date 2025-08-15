import MainHomePage from '../MainHomePage'
import Header from '../Header'
import Slider from '../Slider'
import './index.css'

const Home = () => {
  console.log(1)
  return (
    <>
      <Header />
      <div className="non-header-sub-container">
        <Slider />
        <MainHomePage />
      </div>
    </>
  )
}
export default Home
