import React from 'react'
import styles from './Trailers.module.css'

function Trailers({children}) {

    return (
        <div className={styles.trailers}>
            {children}
        </div>
    )
}

export default Trailers