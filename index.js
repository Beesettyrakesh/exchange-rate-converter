import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_sjaukhw1ZpijfZyh64Afi6NecxuDAY8K108IJgNq');

export async function convert(fromCurrency, toCurrency, units) {
    const res  = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const value = res.data[toCurrency];
    return value * units;
}