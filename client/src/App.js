import React, { Component } from 'react';
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';



// now apollo knows we are going to be hittiing this end-point for our data
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Rashid's reading list</h1>
          <BookList/>
          <AddBook/>
        </div>
      </ApolloProvider>
    )
  }
}

export default App;
