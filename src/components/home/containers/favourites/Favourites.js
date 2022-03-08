import React from 'react'
import styles from './Favourites.module.css'

function Favourites({movies, children}) {

    return (
        <div className={styles.favourites}>
            {children}
        </div>
    )
}

export default Favourites