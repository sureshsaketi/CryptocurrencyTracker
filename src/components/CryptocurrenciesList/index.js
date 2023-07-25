import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyItems()
  }

  getCurrencyItems = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(item => ({
      currencyLogo: item.currency_logo,
      id: item.id,
      currencyName: item.currency_name,
      euroValue: item.euro_value,
      usdValue: item.usd_value,
    }))
    this.setState({currenciesList: updatedData, isLoading: false})
  }

  render() {
    const {currenciesList, isLoading} = this.state
    return (
      <div className="currency-list-container">
        <h1 className="currency-heading">Cryptocurrency Tracker</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-image"
        />

        <ul className="cryptocurrency-items-container">
          <li className="li-nav-item">
            <p>Coin Type</p>
            <div className="currency-type-container">
              <p className="currency">USD</p>
              <p className="currency">EURO</p>
            </div>
          </li>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            <>
              {currenciesList.map(eachCurrency => (
                <CryptocurrencyItem
                  currencyDetails={eachCurrency}
                  key={eachCurrency.id}
                />
              ))}
            </>
          )}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
