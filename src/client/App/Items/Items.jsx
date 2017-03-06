// Libs
import React, { Component, PropTypes } from 'react';

export default class Items extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    return (
      <div>
        Items
        {this.props.children}
      </div>
    );
  }
}
