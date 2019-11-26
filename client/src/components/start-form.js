import React from 'react';

class StartForm extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (

      <div className="start-form">
        <input type="text" placeholder="Destination" /> <br />
        <input type="date" placeholder="Date From" /> <br />
        <input type="date" placeholder="Date To" /> <br />
        <button className="start-button">Start planning!</button>
      </div>


    );

  }

}

export default StartForm;
