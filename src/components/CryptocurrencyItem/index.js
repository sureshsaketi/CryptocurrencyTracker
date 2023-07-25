import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails
  return (
    <li className="li-item">
      <div className="currency-logo-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>

      <div className="currency-type-container">
        <p className="text">{usdValue}</p>
        <p className="text">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
