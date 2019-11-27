import React from 'react';

class ActivityListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="activity-list-item">
        <input type="checkbox" /> &nbsp;
        <label className="activity-list-item-name">Skiing</label>
      </div>
    )
  }

}

export default ActivityListItem;