import React from 'react';
import Food from './Food';

// TODO: Make a type for FoodList

class FoodList extends React.Component {
    render() {
        return (
            <>
                <h1>Food</h1>
                <table>
                    <tr>
                        <th>Amount (g)</th>
                        <th>Calories</th>
                        <th>Protein</th>
                        <th>Fat</th>
                        <th>Carbohydrates</th>
                        <th>Notes</th>
                    </tr>
                    {this.props.foods.map((food) => (
                        <Food name={food.name} amount={food.amount} calories={food.calories} fat={food.fat} carbohydrates={food.carbohydrates} protein={food.protein} />
                    ))}

                </table>
            </>
        )
    }
}

export default FoodList;
