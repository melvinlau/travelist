import React from 'react';
import PackingListItem from './packing-list-item';

class PackingList extends React.Component {

  constructor(props) {
    super(props);
    let items = [];
    this.props.trip.activity.forEach(activity => {
      activity.items.forEach(item => {
        items.push(item)
      })
    });
    console.log(items);

    this.state = {
      items: items
    }
    this.printItems = this.printItems.bind(this)
  }

  printItems() {
    this.props.items.map((item) => {
       return (<PackingListItem item={item} />)
    })
  }

  render() {
    return (
      <div className="packing-list">
        <h2>Things to pack for {this.props.trip.destination}</h2>
        {
          this.state.items.map((item) => {
            return (<PackingListItem item={item} />)
          })
        }
      </div>
    )
  }

}

export default PackingList;
