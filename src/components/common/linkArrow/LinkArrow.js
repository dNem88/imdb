import React from 'react'
import {Link} from 'react-router-dom'
import styles from './LinkArrow.module.css'
import {ReactComponent as RightArrow} from '../../../assets/rightArrow.svg'

function LinkArrow({content, href}) {

    return (
        <Link className={styles.link} to={href}>{content}
            <RightArrow/>
        </Link>
    )

}

export default LinkArrow