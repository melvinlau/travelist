import React from 'react';

class PackingList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="packing-list">
        <input type="checkbox" /> &nbsp;
        <label for="goggles" className="packing-list-name">Goggles</label>
      </div>
    )
  }

}

export default PackingList;