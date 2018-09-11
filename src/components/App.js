import React, { Component } from 'react';
import Recipe from './Recipe';
import Navigation from './Navigation';

class App extends Component {
  constructor() {
    super();
    this.selectNewRecipe = this.selectNewRecipe.bind(this);

    this.state = {    
      recipes: [
        {
          title: 'Bagel',  
          ingredients: ['1 Bagel', 'Cream cheese' ],
          steps: ['Slice bagel in half', 'Spread on cream cheese', 'Enjoy!'],
          id: 'bagel'
        },
        {
          title: 'Pizza', 
          ingredients: ['1 Pizza Crust', '1 Jar of Pizza Sauce', '3 oz Part-Skim Mozerella Cheese'],
          steps: ['Put sauce on crust', 'Sprinkle mozarella cheese over sauce', 'Bake at 350 degrees for 20 minutes' ],
          id: 'pizza'
        },
        {
          title: 'Chalupas', 
          ingredients: ['Tortillas', 'Lettuce', 'Tomatoe', 'Cheese'],
          steps: ['Fry Tortilla', 'Cut tomatoe and lettuce', 'Spread beans on tortillas, top with lettuce & Tomatoe' ],
          id: 'chalupas'
        },
      ],
      selectedRecipe: null
    }
  }

  // Change recipe when recipe is clicked
  selectNewRecipe(recipeId) {
    if (recipeId) {
      this.setState({
        ...this.state,
        selectedRecipe: recipeId
      }
      );
    }
  }
  
  render() {
    let recipeToSelect;
    if (this.state.selectedRecipe) {
      const filteredRecipes = this.state.recipes.filter((recipe) => recipe.id === this.state.selectedRecipe);
      if (filteredRecipes.length > 0) {
        recipeToSelect = filteredRecipes[0];
      }
    }

    return (
      <div className="App">
        <Navigation 
          recipes={this.state.recipes} 
          activeRecipe= {this.state.selectedRecipe}
          recipeToSelect={this.selectNewRecipe}
        />
        <h1>React Recipe Book</h1>    
                   

      {
        recipeToSelect ? 
          <Recipe
          ingredients={recipeToSelect.ingredients}
          steps={recipeToSelect.steps}
          title={recipeToSelect.title}
          />
          :
          null
      }        

    </div>
    );
  }

  componentDidMount() {
    const recipeToShow = this.state.recipes[0].id || null;
    this.setState({
      ...this.state,
      selectedRecipe: recipeToShow
    });
  }



}

export default App;