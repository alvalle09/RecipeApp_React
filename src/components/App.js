import React, { Component } from 'react';


class App extends Component {

  constructor() {
    super();
    //this.selectNewRecipe = this.selectNewRecipe.bind(this);
    this.state = {
      recipes: [
        {
          title: 'Bagel',
          ingredients: [
          '1 Bagel',
          'Cream cheese'
          ],
          steps: [
          'slice nagel in half',
          'Spread on cream cheese',
          'Enjoy!'
          ],
          id: 'bagel'        
      },
      {
        title: 'Pizza',
        ingredients: [
          '1 Pizza Crust',
          '1 Jar of Pizza Sauce',
          '3 oz Part-Skim Mozerella Cheese'
        ],
        steps: [
          'Put sacue on crust',
          'Sprinkle a little love on it',
          'Bake at the moon!'
        ],
        id: 'pizza'
      }
      ]
    };
  }
  
  render() {
    return (
      <div className="App">
        <h1>React Recipe App</h1>
      </div>
    );
  }
}

export default App;
