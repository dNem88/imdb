import React from 'react'
import styles from './Trailers.module.css'

function Trailers({movies, children}) {
    /*TO DO get trailers by movies id*/

    return (
        <div className={styles.trailers}>
            {children}
        </div>
    )
}

export default Trailers