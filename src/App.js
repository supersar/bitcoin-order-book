import React, { useState, useEffect } from 'react';
import { fetchBooks } from './api/exchanges';
import Book from './components/Book';

const App = () => {

  const [state, setState] = useState({
    loading: true,
    asks: [],
    bids: [],
    error: false,
    last_refresh: null,
  });

  useEffect(() => {

    const fetchData = async () => {
      const d = new Date();
      const timestamp = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
      const result = await fetchBooks();
      if (result === false) {
        setState({
          loading: false,
          asks: [],
          bids: [],
          error: true,
          lastRefresh: null,
        });
      } else {
        setState({
          loading: false,
          asks: result.sortedAsks,
          bids: result.sortedBids,
          error: false,
          lastRefresh: timestamp,
        });
      }
    };
    fetchData();
    
    // refresh every 5 seconds
    const interval = setInterval(() => {
      fetchData();
     }, 5000);
     return () => clearInterval(interval);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Book
        state = {state}
      />
    </div>
  );
}

export default App;
