import React from 'react'
import styles from './Streaming.module.css'

function Streaming({movies, children}) {

    return (
        <div className={styles.streaming}>
            {children}
        </div>
    )
}

export default Streaming