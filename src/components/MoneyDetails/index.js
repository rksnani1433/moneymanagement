// Write your code here
import './index.css'

const MoneyDetails = () => {
  const onchek = () => {}
  return (
    <div className="money-details-container">
      <div className="money-status-container">
        <img
          className="money-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="balence-container">
          <p className="balence-text">your balance</p>
          <p className="amount-rs">Rs 0</p>
        </div>
      </div>

      <div id="bg-income" className="money-status-container">
        <img
          className="money-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
        />
        <div className="balence-container">
          <p className="balence-text">your income</p>
          <p className="amount-rs">Rs 0</p>
        </div>
      </div>

      <div id="bg-expenses" className="money-status-container">
        <img
          className="money-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="balence-container">
          <p className="balence-text">your expenses</p>
          <p className="amount-rs">Rs 0</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
