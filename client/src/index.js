import React from "react";
import ReactDOM from "react-dom";

import Form from './components/Form.js';
import List from './components/List.js';
import eventHandlers from './lib/eventHandlers.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cowList: [],
      currentCow: null
    }
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

  render() {
    return (
      <div>
        <h1>The Cows</h1>
        <Form handleSubmit={this.handleSubmit.bind(this)}/>
        <List cowList={this.state.cowList}/>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);