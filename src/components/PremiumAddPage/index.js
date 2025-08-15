import './index.css'

const PremiumAddPage = props => {
  const {removeTakePremiumAdd} = props

  const onClickedRemovePremiumButton = () => {
    removeTakePremiumAdd()
  }

  return (
    <div className="premium-add-main-container">
      <div className="premium-add-main-container-1">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            className="premium-page-main-img-logo"
            alt="logo"
          />
          <p className="premium-add-main-para">
            Buy Nxt Watch Premium prepaid plans with <br />
            UPI
          </p>
        </div>
        <button type="button" className="premium-add-gotitNow-button">
          GET IT NOW
        </button>
      </div>
      <button
        type="button"
        className="main-premium-add-close-button"
        onClick={onClickedRemovePremiumButton}
        data-testid="close"
      >
        x
      </button>
    </div>
  )
}
export default PremiumAddPage
