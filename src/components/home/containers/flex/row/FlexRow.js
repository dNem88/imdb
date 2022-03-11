import React from 'react'
import styles from './FlexRow.module.css'

function FlexRow({children, width="100vw", height="80vh", backgroundColor="black", options}) {

    return (
        <div className={styles.container} style={{width: width, height: height, backgroundColor: backgroundColor, ...options}}>
            {children}
        </div>
    )
}

export default FlexRow