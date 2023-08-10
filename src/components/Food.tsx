import React from 'react';
import FoodProps from '../types/Food.ts';

class Food extends React.Component<FoodProps> {
  render() {
    return (
      <tr>
            <td>{this.props.name}</td>
            <td>{this.props.amount}</td>
            <td>{this.props.calories}</td>
            <td>{this.props.protein}</td>
            <td>{this.props.fat}</td>
            <td>{this.props.carbohydrates}</td>
            <td>{this.props.notes}</td>
      </tr>
    );
  }
}


export default Food
