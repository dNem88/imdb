import React, { useContext, useReducer} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css'
import reducer from './reducers/reducer';
import Home from './components/home/Home';
import About from './components/home/About';
import Top from './components/home/Top'
import imdbContext from './context/imdbContext';

function App() {
  const api_key = 'k_5p1dpjq4'
  const context = useContext(imdbContext)
  const [state, dispatch] = useReducer(reducer, context)
  console.log(state)
  return (
    <BrowserRouter>
      <p>Navigation</p>
        <main>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About update={dispatch}/>}/>
            <Route path={'/top'} element={<Top update={dispatch}/>}/>
          </Routes>
        </main>
       <p>Footer</p> 
    </BrowserRouter>
  )
}

export default App;
