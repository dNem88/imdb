import React from 'react'
import styles from './Description.module.css'

function Description({content}) {

    return (
        <p className={styles.description}>{content}</p>
    )
}

export default Description