import React from 'react';
import ReactDOM from 'react-dom';
import ActivityList from './activity-list';

class StartForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      destination: '',
      dateFrom: '',
      dateTo: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    alert(this.state.destination + ' ' + this.state.dateFrom + ' ' + this.state.dateTo );
  }

  handleSubmit(event) {
    ReactDOM.render(<ActivityList />, document.getElementById('main-content'));
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="start-form">
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={this.state.destination}
          onChange={this.handleChange}
        />

        <br />
        <input 
          type="date"
          name="dateFrom" 
          placeholder="From" 
          value={this.state.dateFrom}
          onChange={this.handleChange}
        /> 

         <br />
        <input 
          type="date" 
          name="dateTo" 
          placeholder="To"
          value={this.state.dateTo}
          onChange={this.handleChange}
        /> 
        
        <br />
        <button className="start-button" onClick={this.handleClick}>Start planning!</button>
      </div>
    );

  }

}

export default StartForm;
