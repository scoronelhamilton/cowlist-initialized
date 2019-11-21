import React from "react";
import ReactDOM from "react-dom";

import Form from './components/Form.jsx';
import List from './components/List.jsx';
import CowDisplayer from './components/CowDisplayer.jsx'
import eventHandlers from './lib/eventHandlers.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cowList: [],
      currentCow: {}
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteElement = this.deleteElement.bind(this);
  }

  componentDidMount() {
    eventHandlers.searchCows().then((response) => {
      this.setState({
        cowList: response.data
      })
    })
  }

  handleSubmit(data) {
    eventHandlers.addCow(data).then((response) => {
      let newCowList = this.state.cowList.slice();
      newCowList.push(response.data);

      this.setState({
        cowList: newCowList
      })
    })
  }

  handleClick(cow) {
    if ( cow !== undefined ) {
      this.setState({
        currentCow: cow
      })
    }
  }

  deleteElement (cow) {
    let id = cow.id;
    let newCowList = this.state.cowList.slice();
    for ( let i = 0; i < newCowList.length; i++ ) {
      if ( id === newCowList[i].id ) {
        newCowList.splice(i, 1);
        break;
      }
    }
    eventHandlers.deleteCow(id)
    .then(
      this.setState({
        cowList: newCowList
      }, () => {
        if ( id === this.state.currentCow.id ) {
          this.setState({
            currentCow: {}
          })
        }
      })
    )
    .catch(err => console.log(err))
    
  }

  render() {
    return (
      <div>
        <h1>The Cows</h1>
        <Form handleSubmit={this.handleSubmit}/>
        <CowDisplayer cow={this.state.currentCow} />
        <List cowList={this.state.cowList} handleClick={this.handleClick} deleteElement={this.deleteElement} />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);