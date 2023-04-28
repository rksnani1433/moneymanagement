// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactions} = props
  const {userAmount, userTitle, typeAmount} = transactions
  const a = () => {}
  return (
    <div className="item-container">
      <p className="texts">{userTitle}</p>
      <p className="texts">{userAmount}</p>
      <p className="texts">{typeAmount}</p>
      <button className="deletebutton">
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </div>
  )
}
export default TransactionItem
