import React from 'react'
import styles from './FlexColumn.module.css'

function FlexColumn({children, width="100vw", height="80vh", backgroundColor="white", options}) {

    return (
        <div className={styles.container} style={{width: width, height: height, backgroundColor: backgroundColor, ...options}}>
            {children}
        </div>
    )
}

export default FlexColumn