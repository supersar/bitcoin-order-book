import { getByTestId, render, screen } from '@testing-library/react';
import Book from './Book';
import { expectedAsks, expectedBids } from '../test/data/fakeBookState';

describe('Renders the Book elements', () => {

  it('Renders correctly Bids and Asks', () => {
    const fakeState = {
      loading: false,
      asks: expectedAsks,
      bids: expectedBids,
      error: false,
    };

    render(
      <Book 
        state = {fakeState}
      />
    );
    
    const bidTitleElement = screen.getByText(/Bids/i);
    expect(bidTitleElement).toBeInTheDocument();
    
    const bidElement = screen.getByText(/0.03345949/i);
    expect(bidElement).toBeInTheDocument();
    
    const askTitleElement = screen.getByText(/Asks/i);
    expect(askTitleElement).toBeInTheDocument();
    
    const askElement = screen.getByText(/0.03344197/i);
    expect(askElement).toBeInTheDocument();
  });

  it('Renders Loading while loading', () => {
    const fakeState = {
      loading: true,
      asks: [],
      bids: [],
      error: false,
    };

    render(
      <Book 
        state = {fakeState}
      />
    );

    const loadElement = screen.getByText(/Loading/i);
    expect(loadElement).toBeInTheDocument();
  });

  it('Renders Error if loading errored out', () => {
    const fakeState = {
      loading: false,
      asks: [],
      bids: [],
      error: true,
    };

    render(
      <Book 
        state = {fakeState}
      />
    );
    
    const errorElement = screen.getByText(/Oops! There was a problem loading the book data. Please try again in a moment./i);
    expect(errorElement).toBeInTheDocument();
  });
});
