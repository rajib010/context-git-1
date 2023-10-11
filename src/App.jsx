import Child from './Child'
import './App.css'
import React, { createContext, useState } from 'react'

export const GlobalColor = createContext();

function App() {

  const [color, setColor] = useState('red');
  const [rajib, setRajib] = useState('Rajib');
  const [age, setAge] = useState(20);
  const [day, setDay] = useState('Sunday');

  const getDay = (item) => {
    console.log(item);
    setDay(item);
  }
  return (
    <>
      <GlobalColor.Provider value={{ Hcolor: color, name: rajib, age: 20, getDay: getDay }}>
        <h1>App Component {day}</h1>
        <Child />
      </GlobalColor.Provider>
    </>
  )

}

export default App
