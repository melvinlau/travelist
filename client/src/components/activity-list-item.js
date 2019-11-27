import React from 'react';

class ActivityListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  toggleCheck() {
    if (this.state.isChecked) {
      this.props.removeActivity(this.props.activity);
      this.setState({isChecked: false});
    } else {
      this.props.addActivity(this.props.activity);
      this.setState({isChecked: true});
    }
  }

  render() {
    return (
      <div className="activity-list-item">
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleCheck}
        />
        &nbsp;
        <label className="activity-list-item-name">{this.props.activity}</label>
      </div>
    )
  }

}

export default ActivityListItem;
