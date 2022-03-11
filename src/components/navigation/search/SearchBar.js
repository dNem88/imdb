import React, {useState} from 'react'
import {ReactComponent as SearchIcon} from '../../../assets/search.svg'
import styles from './SearchBar.module.css'

function SearchBar() {
    const [state, setState] = useState('')

    function changeHandler(e) {
        setState(e.target.value)
    }
    console.log(state)
    return (
        <div className={styles.container}>
            <input onChange={changeHandler} className={styles.search} type='search' placeholder='Search IMDb by Title' value={state}></input>
            <SearchIcon/>
        </div>
    )
}

export default SearchBar