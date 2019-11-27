import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ActivityList from './activity-list';

class StartForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      destination: '',
      dateFrom: '',
      dateTo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderActivityList() {
    ReactDOM.render(<ActivityList />, document.getElementById('main-content'));
  }

  handleSubmit(event) {
    axios.post(
      'http://localhost:3001/api/trips/',
      this.state
    )
    .then(
      response => {
        ReactDOM.render(
          <ActivityList trip={response.data.trip} />,
          document.getElementById('main-content')
        );
      }
    )
    .catch(console.log);
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
        <button className="start-button" onClick={this.handleSubmit}>Start planning!</button>
      </div>
    );

  }

}

export default StartForm;
