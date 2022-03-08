import React from 'react'
import styles from './Soon.module.css'

function Soon({movies, children}) {

    return (
        <div className={styles.soon}>
            {children}
        </div>
    )
}

export default Soon