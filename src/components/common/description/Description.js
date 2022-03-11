import React from 'react'
import styles from './Description.module.css'

function Description({content, options={}}) {

    return (
        <p className={styles.description} style={options}>{content} </p>
    )
}

export default Description