import React from 'react';
import ReactDOM from 'react-dom';
import ActivityListItem from './activity-list-item';
import PackingList from './packing-list';

class ActivityList extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    console.log(this.props);
  }

  handleClick(event) {
    ReactDOM.render(<PackingList />, document.getElementById('main-content'));
  }

  render() {
    return (
      <div className="activity-list">
        <h2>What I will be doing in {this.props.trip.destination}:</h2>
        <ActivityListItem />
        <ActivityListItem />
        <ActivityListItem />
        <button className="get-list-button" onClick={this.handleClick}>
          Generate a packing list!
        </button>
      </div>
    )
  }

}

export default ActivityList;
