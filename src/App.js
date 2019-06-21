import React from 'react';
import './App.css';
import Header from './components/Header';
import SendMessage from './components/SendMessageForm'
import TouitContainer from './components/TouitContainer';
import Trending from './components/Trending'
class App extends React.Component {

  render() {

    return (
      <div className="App bg-light">
        <Header />
        <SendMessage />
        <div className="container-fluid">
          <div className="row">
            <div className='col-4' >
              <Trending /></div>
            <div className="col-8">
              <TouitContainer /></div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
