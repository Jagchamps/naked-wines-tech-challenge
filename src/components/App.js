import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card.js';
import { Grid, Container } from '@material-ui/core';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import '../styles/App.scss';

const WINE_DATA_URL = 'http://localhost:3001/wine';

// const CardList = (props) => (
//   <section className="products">
//     <Grid 
//       container 
//       alignItems="stretch"
//       alignContent="flex-start" 
//       flexGrow={1}
//       spacing={3}>
//       {props.wines.map(wine => 
//         <Grid 
//           item xs={12} 
//           sm={6} 
//           md={4}>
//           <Card 
//             key={wine.id} 
//             product={wine}/>
//         </Grid>
//       )}
//     </Grid>
//   </section>
// );

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
        setData({wines: response.data, isFetching: false});
      } catch (e) {
        console.log(e);
        setData({wines: data.wines, isFetching: false});
      }
    };
    fetchWinesAxios();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
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
  );
}

export default App;
