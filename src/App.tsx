import FoodList from './components/FoodList'
import './App.css'

function App() {

    const foods = [
        {
            name: 'Pizza',
            amount: 100,
            calories: 45 + 1000
        },
        {
            name: 'Hot Dog',
            amount: 100,
            fat: 50,
            calories: 45 + 1000
        },
        {
            name: 'Hamburger',
            amount: 100,
            protein: 10,
            calories: 45 + 1000
        },
        {
            name: 'Beer',
            amount: 100,
            calories: 45 + 1000
        },
        {
            name: 'Pulled Pork',
            amount: 100,
            carbohydrates: 0,
            calories: 45 + 1000
        },
    ]

    return (
        <FoodList foods={foods} />
    )
}

export default App
