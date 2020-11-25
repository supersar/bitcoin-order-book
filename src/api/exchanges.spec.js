import { bittrexBook, poloniexBook } from '../test/data/exchangeResponses';
import { expectedAsks, expectedBids } from '../test/data/fakeBookState';
import { combineBooks } from './exchanges';

describe('Tests the combinedBooks logic', () => {
  it('Correctly merges and sorts Asks from both exchanges', () => {
    expect(combineBooks({ bittrexBook, poloniexBook }).sortedAsks).toEqual(expectedAsks);
  });
  it('Correctly merges and sorts Bids from both exchanges', () => {
    expect(combineBooks({ bittrexBook, poloniexBook }).sortedBids).toEqual(expectedBids);
  });
  it('Gracefully handles empty responses from exchanges', () => {
    expect(combineBooks({ bittrexBook: [], poloniexBook: [] }).sortedAsks).toEqual([]);
    expect(combineBooks({ bittrexBook: [], poloniexBook: [] }).sortedBids).toEqual([]);
  });

});