import React from 'react'
import styles from './Videos.module.css'

function Videos({movies, children}) {

    return (
        <div className={styles.videos}>
            {children}
        </div>
    )
}

export default Videos