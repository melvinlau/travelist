import React from 'react';
import PackingListItem from './packing-list-item';

class PackingList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="packing-list">
        <h2>Things to pack</h2>
        <PackingListItem />
        <PackingListItem />
        <PackingListItem />
      </div>
    )
  }

}

export default PackingList;
