import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
      </div>
    );
  }
}

Navigation.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default Navigation;
