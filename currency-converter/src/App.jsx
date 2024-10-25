import React, { useState } from 'react';
import InputBox from './components/InputBox.jsx';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const { data: currencyData, loading, error } = useCurrencyInfo(fromCurrency);
    const currencyOptions = currencyData?.rates ? Object.keys(currencyData.rates) : [];

    const convertCurrency = () => {
        if (currencyData && currencyData.rates[toCurrency]) {
            const rate = currencyData.rates[toCurrency];
            setConvertedAmount((amount * rate).toFixed(2));
        }
    };

    const swapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setConvertedAmount((amount * (currencyData?.rates[toCurrency] || 1)).toFixed(2));
    };

    return (
        <div className="App">
            <h1>Currency Converter</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <InputBox
                label="From"
                amount={amount}
                onAmountChange={setAmount}
                onCurrencyChange={setFromCurrency}
                currencyOptions={currencyOptions}
                selectCurrency={fromCurrency}
            />
            <button onClick={swapCurrencies} className="swap-button">Swap</button>
            <InputBox
                label="To"
                amount={convertedAmount}
                onAmountChange={() => {}}
                onCurrencyChange={setToCurrency}
                currencyOptions={currencyOptions}
                selectCurrency={toCurrency}
                amountDisable={true}
            />
            {/* Ensure there's only one Convert button here */}
            <button onClick={convertCurrency} className="convert-button">Convert</button>
        </div>
    );
}

export default App;
