import React from 'react';

class ActivityItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="activity-item">
        <input type="checkbox" name="skiing" /> &nbsp;
        <label for="skiing" className="activity-item-name">Skiing</label>
      </div>
    )
  }

}

export default ActivityItem;
