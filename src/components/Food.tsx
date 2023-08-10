import React from 'react';
import FoodProps from './types/Food.ts';

class Food extends React.Component<FoodProps> {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <table>
        <tr>
            <th>Amount (g)</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Fat</th>
            <th>Carbohydrates</th>
            <th>Notes</th>
        </tr>
        <tr>
            <td>{this.props.amount}</td>
            <td>{this.props.calories}</td>
            <td>{this.props.protein}</td>
            <td>{this.props.fat}</td>
            <td>{this.props.carbohydrates}</td>
            <td>{this.props.notes}</td>a
        </tr>
        </table>
      </div>
    );
  }
}


export default Food
