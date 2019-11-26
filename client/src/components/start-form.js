import React from 'react';
import ReactDOM from 'react-dom';
import ActivityItem from './activity-item';

class StartForm extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    ReactDOM.render(<ActivityItem />, document.getElementById('root'));
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
