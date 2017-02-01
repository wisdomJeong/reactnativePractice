import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

const mapStoreToProps = state => {
  return { librariess: state.libraries };
};

export default connect(mapStoreToProps)(LibraryList);
