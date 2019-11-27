import React from 'react';

class PackingListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
    this.toggleItemCheckbox = this.toggleItemCheckbox.bind(this);
  }

  toggleItemCheckbox() {
    if (this.state.isChecked) {
      this.setState({ isChecked: false });
    } else {
      this.setState({ isChecked: true });
    }
  }

  render() {
    return (
      <div className="packing-list-item">
        <input
          type="checkbox"
          onChange={this.toggleItemCheckbox}
        />
        &nbsp;
        <label className="packing-list-item-name">{this.props.item}</label>
      </div>
    )
  }

}

export default PackingListItem;
