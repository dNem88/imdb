import react from 'react'
import styles from './HeaderGrey.module.css'

function HeaderGrey({content, options }) {

    return (
        <h3 className={styles.header} styles={options}>{content}</h3>
    )
}

export default HeaderGrey