import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card.js';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../styles/App.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1a237e",
    },
    secondary: {
      main: "#ff9100",
    },
  }
});

const LOCAL_WINE_DATA_URL = 'http://localhost:3001/wines';

const WINE_DATA_URL = 'https://naked-wines-tech-challenge-data.s3.eu-west-1.amazonaws.com/wine-data.json';

const CardList = (props) => (
  <section className="products">
      {props.wines.map(wine => 
          <Card 
            key={wine.id} 
            product={wine}/>
      )}
  </section>
);

function App() {
  const [data, setData] = useState({wines: [], isFetching: false});

  useEffect(() => {
    const fetchWinesAxios = async () => {
      try {
        setData({wines: data.wines, isFetching: true});
        const response = await axios.get(WINE_DATA_URL);
        console.log(response.data);
        console.log(response.data.wines);
        setData({wines: response.data.wines, isFetching: false});
      } catch (e) {
        console.log(e);
        setData({wines: data.wines, isFetching: false});
      }
    };
    fetchWinesAxios();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="App-header">
          <h1>Champion Wines</h1>
        </div>
        <main className="main-section" role="main">
          <div className="App-body">
            <CardList 
              wines={data.wines}
              isFetching={data.isFetching}
            />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
