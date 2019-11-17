import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    event.preventDefault();
    let newName = event.target.value;
    this.setState({
      name: newName
    })
  };

  handleDescriptionChange(event) {
    event.preventDefault();
    let newDescription = event.target.value;
    this.setState({
      description: newDescription
    })
  };

  render() {
    return (
    <div className='form'>
      <form>
        Name:<br/>
        <input type='text' name ='name' onChange={this.handleNameChange}/>
        <br/>
        Description:<br/>
        <input type='text' name ='description' onChange={(e) => this.handleDescriptionChange(e)}/>
      </form>
      <button type="button" onClick={() => this.props.handleSubmit(this.state)} >Add Cow</button>
    </div>
    )
  }
}

export default Form;