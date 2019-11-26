import React from 'react';
import ReactDOM from 'react-dom';
import ActivityList from './activity-list';

class StartForm extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    ReactDOM.render(<ActivityList />, document.getElementById('main-content'));
  }

  render() {
    return (
      <div className="start-form">
        <input type="text" name="destination" placeholder="Destination" /> <br />
        <input type="date" name="start-date" placeholder="From" /> <br />
        <input type="date" name="end-date" placeholder="To" /> <br />
        <button className="start-button" onClick={this.handleClick}>Start planning!</button>
      </div>
    );

  }

}

export default StartForm;
