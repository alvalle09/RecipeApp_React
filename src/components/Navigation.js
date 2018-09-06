import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navigation extends Component {
  constructor() {
    super();
    this.changeRecipe = this.changeRecipe.bind(this);    
  }

  changeRecipe() {
    const buttonI = e.target.id;
    const recipeId = buttonId.split('_')[0];
    this.props.recipeToSelect(recipeId);
  }


  render() {
    return (
     <nav>
       <ul>
         {
           this.props.recipes.map((recipe) => 
           <li>
             <button
              id={recipe.id + '_button'}
              key={recipe.id} >
              {recipe.title}
            </button>
           </li>
           )
         }
       </ul>
     </nav>
    );
  }
}

Navigation.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default Navigation;

