import React from 'react';

class ActivityListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="activity-list-item">
        <input type="checkbox" /> &nbsp;
        <label className="activity-list-item-name">{this.props.activity}</label>
      </div>
    )
  }

}

export default ActivityListItem;
