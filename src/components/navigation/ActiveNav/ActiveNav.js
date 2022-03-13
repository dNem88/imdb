import React from 'react'
import styles from './ActiveNav.module.css'
import {Link} from 'react-router-dom'


function ActiveNav() {

    return (
        <nav className={styles.navigation}>
            <Link to={'/home'}>Home</Link>
            <Link to={'/home'}>Movies</Link>
            <Link to={'/home'}>TV Shows</Link>
            <Link to={'/home'}>In Theatres</Link>
            <Link to={'/home'}>Comming Soon</Link>
        </nav>
    )
}

export default ActiveNav