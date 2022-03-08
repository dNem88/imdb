import React from 'react'
import styles from './Watchlist.module.css'

function Watchlist({movies, children}) {

    return (
        <div className={styles.watchlist}>
            {children}
        </div>
    )
}

export default Watchlist