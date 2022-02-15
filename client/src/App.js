import React from "react";
import './styles/App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import MyJourney from "./components/MyJourney";
import Welcome from './components/pages/Welcome';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Switch, Route  add once we have all the pages and JWt

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

export default function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Navbar/>
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Welcome/>}> </Route>
                <Route exact path='/myJourney' element={<MyJourney/>}> </Route>
              </Routes>
            </div>
            <Footer/>
          </div>
        </Router>
      </ApolloProvider>
    );
}
