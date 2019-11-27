import React from 'react';
import PackingListItem from './packing-list-item';

class PackingList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Shoes',
        'Scarf',
        'Goggles',
        'Jacket',
        'Jeans',
        'Hat'
      ]
    }
    this.printItems = this.printItems.bind(this)
  }

  printItems() {
    this.state.items.map((item) => {      
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
