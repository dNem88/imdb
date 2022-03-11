import React, { useContext, useReducer, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css'
import Navigation from './components/navigation/Navigation/Navigation';
import reducer from './reducers/reducer';
import Home from './components/home/Home';
import imdbContext from './context/imdbContext';
import data from './top250'
import data2 from './popular'
import data1 from './inTheatres'

function App() {
  const api_key = 'k_5p1dpjq4'
  const context = useContext(imdbContext)
  const [state, dispatch] = useReducer(reducer, context)
  useEffect(() => {
      async function Fetch() {
          try {
              dispatch({type: 'inTheatres', payload: data1})
              dispatch({type: 'addTop250Movies', payload: data})
              dispatch({type: 'topRated', payload: data2})
          } catch(err){
              dispatch({type: 'error', payload: 'Failed to update!'})
          }
      }
      Fetch()
  }, [])
  console.log(state)
  return (
    <BrowserRouter>
      <Navigation/>
      <imdbContext.Provider value={state}>
        <main>
          <Routes>
            <Route path={'/'} element={<Home />}/>
          </Routes>
        </main>
       <p>Footer</p>
      </imdbContext.Provider>
    </BrowserRouter>
  )
}

export default App;
