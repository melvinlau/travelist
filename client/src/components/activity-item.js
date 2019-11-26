import React from 'react';
import ReactDOM from 'react-dom';
import PackingList from './packing-list';

class ActivityItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    ReactDOM.render(<PackingList />, document.getElementById('root'));
  }

  render() {
    return (
      <div className="activity-item">
        <input type="checkbox" name="skiing" /> &nbsp;
        <label for="skiing" className="activity-item-name">Skiing</label>
        <button className="get-list-button" onClick={this.handleClick}>Start planning!</button>
      </div>
    )
  }

}

export default ActivityItem;
