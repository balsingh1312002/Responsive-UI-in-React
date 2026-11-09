import Card from './components/card/Card.jsx'
import './App.css'
const App = () => {
  return (
    <div className="app-container">
         <Card name="BALA" email="bala@123" btnName="btn1" />
         <Card name="MANI" email="mani@123" btnName="btn2" />
         <Card name="KAVI" email="kavi@123" btnName="btn3" />
    </div>
  )
}

export default App
