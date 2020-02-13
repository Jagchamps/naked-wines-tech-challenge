import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card.js';
import '../styles/App.css';

const WINE_DATA_URL = 'src/data/json/singular-wine.json';

const CardList = (props) => (
  <div className="wine-cards">
    {props.wines.map(wine => <Card key={wine.id} />)}
  </div>
);

function App() {
  const [data, setData] = useState({wines: [], isFetching: false});

  useEffect(() => {
    /*
    const fetchWinesAxios = async () => {
      try {
        setData({wines: data.wines, isFetching: true});
        const response = await axios.get(WINE_DATA_URL);
        setData({wines: response.data, isFetching: false});
      } catch (e) {
        console.log(e);
        setData({wines: data.wines, isFetching: false});
      }
    };
    fetchWinesAxios();
    */
    const fetchWines = async () => {
      try {
        setData({wines: data.wines, isFetching: true});
        const response = await fetch(WINE_DATA_URL, {mode: 'no-cors'});
        console.log(response);
        const test_text = await response.text();
        console.log(test_text);
        const json = await response.json();
        console.log(json);
        setData({wines: json, isFetching: false});
      } catch (e) {
        console.log(e);
        setData({wines: data.wines, isFetching: false});
      }
    };
    fetchWines();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="App-body">
        <CardList 
          wines={data.wines}
          isFetching={data.isFetching}
        />
      </div>
    </div>
  );
}

export default App;
