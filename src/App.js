import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from './components/testModal';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  hideModal() {
    this.setState({showModal: false});
  }

  showModal() {
    this.setState({showModal: true});
  }

  testDirectory = () => {
    alert('test');
    // requires actually making an app and testing differently than a web page...
    // maybe use sandboxed file storage, with zip transfer mechanism...
    //chrome.fileSystem.chooseEntry({type: 'openDirectory'}, this.fileHandleCallback);
  };

  fileHandleCallback = (entry, fileEntries, properties) => {
    alert('got it!');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button type="button" onClick={this.showModal}>Open Modal</button>
          <Modal show={this.state.showModal} handleClose={this.hideModal}>
            <p>Modal</p>
            <p>Data</p>
            <button type="button" onClick={this.testDirectory}>OpenDirectory</button>
          </Modal>
        </header>
      </div>
    );
  }
}

export default App;
