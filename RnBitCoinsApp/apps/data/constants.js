/* eslint-disable prettier/prettier */
// https://github.com/spothq/cryptocurrency-icons/tree/master/32%402x/icon 참고 사이트
export function getCoinIconUri(coinName) {
    switch (coinName) {
        case 'Bitcoin':         // BTC
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/btc@2x.png?raw=true';
        case 'Ethereum':        // ETH
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/eth@2x.png?raw=true';
        case 'XRP':             // XRP
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/xrp@2x.png?raw=true';
        case 'EOS':             // EOS
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/eos@2x.png?raw=true';
        case 'Bitcoin Cash':    // BCH
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/bch@2x.png?raw=true';
        case 'Litecoin':        // LTC
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/ltc@2x.png?raw=true';
        case 'Tether':          // USDT
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/usdt@2x.png?raw=true';
        case 'Chainlink':       // LINK
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/link@2x.png?raw=true';
        case 'Tether':          // ADA
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/ada@2x.png?raw=true';
        case 'Polkdot':         // DOT
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/dot@2x.png?raw=true';
        default:                // ESLE
            return 'https://icon-icons.com/icons2/1385/PNG/64/generic-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment_95340.png';
    }
}
