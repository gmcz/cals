import Food from './components/Food'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Food name="Pizza" amount={100} calories={45 + 1000} />
     </div>
    </>
  )
}

export default App
