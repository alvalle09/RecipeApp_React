import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navigation extends Component {
  constructor() {
    super();
    this.changeRecipe = this.changeRecipe.bind(this);    
  }

  changeRecipe(e) {
    const buttonId = e.target.id;
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
              id={recipe.id + '_button'} /* renders a button with id of id_button */
              key={recipe.id}  /* render a button dynamically, weird comment syntax if u ask me*/
              onClick={this.changeRecipe}
              className={
                recipe.id === this.props.activeRecipe ?
                  'Navigation__button Navigation_button--active'
                  :
                  'Navigation__button'
              }
            >
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
  recipes: PropTypes.array.isRequired,
  recipeToSelect: PropTypes.func.isRequired
};

export default Navigation;

