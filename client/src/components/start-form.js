import React from 'react';

class StartForm extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (

      <div className="start-form">
        <input type="text" name="destination" placeholder="Destination" /> <br />
        <input type="date" name="start-date" placeholder="From" /> <br />
        <input type="date" name="end-date" placeholder="To" /> <br />
        <button className="start-button">Start planning!</button>
      </div>

    );

  }

}

export default StartForm;
