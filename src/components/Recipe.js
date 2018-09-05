import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Recipe extends Component {
  render() {
    // the following can be done in JSX as well..
    const ingredients = this.props.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>);
    const steps = this.props.steps.map((step, i) => <li key={i}>{step}</li>);

    return {
      <div className="Recipe"></div>
    };
  }
}


Recipe.PropTypes = {
  ingredients: PropTypes.array.isRequired,
  steps: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Recipe;