import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'


const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' })

const client = new ApolloClient({
   link: httpLink,
   cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
        <App valor='Global Logic'/>
    </BrowserRouter>,
  </ApolloProvider>,
 document.getElementById('root'));

serviceWorker.unregister();
