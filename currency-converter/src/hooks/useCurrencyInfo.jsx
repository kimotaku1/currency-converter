// src/hooks/useCurrencyInfo.js

import { useEffect, useState } from 'react';

function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({ rates: {}, base: '', date: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
                if (!response.ok) throw new Error('Failed to fetch currency data');
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchCurrencyData();
    }, [baseCurrency]);

    return { data, loading, error };
}

export default useCurrencyInfo;
