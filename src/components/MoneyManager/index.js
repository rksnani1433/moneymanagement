import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const previousTransations = []

class MoneyManager extends Component {
  state = {
    userTitle: '',
    userAmount: '',
    typeAmount: 'Income',
    intialTrans: previousTransations,
  }

  addTransaction = event => {
    event.preventDefault()
    const {userAmount, userTitle, typeAmount, intialTrans} = this.state
    const newTrans = {
      id: uuidv4(),
      userTitle,
      userAmount,
      typeAmount,
    }
    this.setState(prevstate => ({
      intialTrans: [...prevstate.intialTrans, newTrans],
    }))
  }

  onTitleUpdate = event => {
    this.setState({userTitle: event.target.value})
  }

  onAmountUpdate = event => {
    this.setState({userAmount: event.target.value})
  }

  onTypeUpdate = event => {
    this.setState({typeAmount: event.target.value})
  }

  render() {
    const {userAmount, userTitle, typeAmount, intialTrans} = this.state
    console.log(intialTrans)
    console.log(typeAmount)
    console.log(userTitle)
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="name-container">
            <p className="richard-name">Hi Richard</p>
            <p className="richard-text">
              welcome back to your{' '}
              <span className="blue-text">Money Manager</span>
            </p>
          </div>
          <MoneyDetails />
          <div className="transaction-history-container">
            <div className="user-input-container">
              <h2 className="header">Add transaction</h2>
              <form onSubmit={this.addTransaction} className="form-container">
                <lable className="lables">Title</lable>
                <input
                  onChange={this.onTitleUpdate}
                  placeholder="TITLE"
                  type="text"
                  className="user-title"
                />
                <lable className="lables">Amount</lable>
                <input
                  onChange={this.onAmountUpdate}
                  placeholder="AMOUNT"
                  type="number"
                  className="user-title"
                />
                <lable className="lables">Type</lable>
                <select
                  onChange={this.onTypeUpdate}
                  className="options-container"
                >
                  {transactionTypeOptions.map(option => (
                    <option key={option.optionId} value={option.displayText}>
                      {option.displayText}
                    </option>
                  ))}
                </select>
                <button className="add-button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="transaction-container">
              <p className="history-head">History</p>
              <div className="type-container">
                <p className="types">Title</p>
                <p className="types">Amount</p>
                <p className="types">Type</p>
                <p className="types" />
              </div>
              {intialTrans.map(each => (
                <TransactionItem key={each.id} transactions={each} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
