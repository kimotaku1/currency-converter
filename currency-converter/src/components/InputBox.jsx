import React, { useId } from 'react';
import './InputBox.css';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    onConvert,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div className={`input-box-container ${className}`}>
            <div className="input-group">
                <label htmlFor={amountInputId} className="label">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="amount-input"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="currency-group">
                <p className="currency-label">Currency Type</p>
                <select
                    className="currency-select"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.length > 0 ? (
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency.toUpperCase()}
                            </option>
                        ))
                    ) : (
                        <option disabled>No currencies available</option>
                    )}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
