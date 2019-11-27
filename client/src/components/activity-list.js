import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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
      ],
      selectedActivities: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.addActivity = this.addActivity.bind(this);
    this.removeActivity = this.removeActivity.bind(this);

  }

  handleClick(event) {
    console.log(this.state.selectedActivities)
    axios.patch(
      `http://localhost:3001/api/trips/${this.props.trip._id}`,
      {
        "destination": this.props.trip.destination,
        "activity": this.state.selectedActivities,
        "items": this.props.trip.items
      }
    )
    .then(
      response => {
        console.log(response.data);
        ReactDOM.render(
          <PackingList trip={response.data.trip} />,
          document.getElementById('main-content')
        );
      }
    )
    .catch(console.log);

  }

  addActivity(activity) {
    this.state.selectedActivities.push(activity);
  }

  removeActivity(activity) {
    
    this.state.selectedActivities.splice(
      this.state.selectedActivities.indexOf(activity)
    );
  }

  render() {
    return (
      <div className="activity-list">
        <h2>What I will be doing in {this.props.trip.destination}:</h2>

        {
          this.state.activities.map((activity) => {
            return (
              <ActivityListItem
                activity={activity}
                addActivity={this.addActivity}
                removeActivity={this.removeActivity}
              />
            )
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
