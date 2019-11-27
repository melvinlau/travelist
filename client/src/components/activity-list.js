import React from 'react';
import ReactDOM from 'react-dom';
import ActivityListItem from './activity-list-item';
import PackingList from './packing-list';

class ActivityList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activities: [
        'skiing',
        'shopping',
        'business',
        'mountain climbing',
        'hiking',
        'biking',
        'surfing',
        'relaxing on the beach'
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    ReactDOM.render(<PackingList trip={this.props.trip}/>, document.getElementById('main-content'));
  }

  render() {
    return (
      <div className="activity-list">
        <h2>What I will be doing in {this.props.trip.destination}:</h2>

        {
          this.state.activities.map((activity) => {
            return (<ActivityListItem activity={activity} />)
          })
        }

        <button className="get-list-button" onClick={this.handleClick}>
          Generate a packing list!
        </button>
      </div>
    )
  }

}

export default ActivityList;
