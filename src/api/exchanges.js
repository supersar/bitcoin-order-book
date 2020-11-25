import axios from 'axios';

export const fetchBooks = async () => {
  try {
    const bittrex = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api.bittrex.com/v3/markets/ETH-BTC/orderbook');
    const bittrexBook = bittrex.data;
    const poloniex = await axios.get(
      'https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=10');
    const poloniexBook = poloniex.data;
    return combineBooks({ bittrexBook, poloniexBook});
  } catch(e) {
    console.log(e);  // @todo send to logger
    return false;
  } 
}

export const combineBooks = ({ bittrexBook, poloniexBook }) => {

  // if fetch returned empty arrays, gracefully error
  if (!bittrexBook.ask || !bittrexBook.bid || !poloniexBook.asks || !poloniexBook.bids) 
    return ({ sortedAsks:[], sortedBids: [] });

  // merge all asks into one array sorted asc
  const poloniexAsks = poloniexBook.asks.length > 0 
    ? poloniexBook.asks.reduce((acc, ask) => {
        acc.push({
          exchange: 'Poloniex',
          rate: Number(ask[0]),
          quantity: Number(ask[1]),
        });
        return acc;
      }, [])
    : [];
  const bittrexAsks = bittrexBook.ask.length > 0 
    ? bittrexBook.ask.map(ask => ({
        quantity: Number(ask.quantity),
        rate: Number(ask.rate),
        exchange: 'Bittrex',
      }))
    : [];
  const concatAsks = poloniexAsks.concat(bittrexAsks);
  const sortedAsks = concatAsks.sort((a,b) => Number(a.rate) > Number(b.rate) ? 1 : -1);
  
  // merge all bids into one array sorted desc
  const poloniexBids = poloniexBook.bids.length > 0 
  ? poloniexBook.bids.reduce((acc, bid) => {
      acc.push({
        exchange: 'Poloniex',
        rate: Number(bid[0]),
        quantity: Number(bid[1]),
      });
      return acc;
    }, [])
  : [];
  const bittrexBids = bittrexBook.bid.length > 0 
    ? bittrexBook.bid.map(bid => ({
        quantity: Number(bid.quantity),
        rate: Number(bid.rate),
        exchange: 'Bittrex',
      }))
    : [];
  const concatBids = poloniexBids.concat(bittrexBids);
  const sortedBids = concatBids.sort((a,b) => Number(a.rate) < Number(b.rate) ? 1 : -1);

  return ({sortedAsks, sortedBids});
}
