import React from 'react';

class PackingListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="packing-list-item">
        <input type="checkbox" /> &nbsp;
        <label className="packing-list-item-name">Goggles</label>
      </div>
    )
  }

}

export default PackingListItem;
