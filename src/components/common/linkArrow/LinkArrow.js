import React from 'react'
import {Link} from 'react-router-dom'
import styles from './LinkArrow.module.css'
import {ReactComponent as RightArrow} from '../../../assets/rightArrow.svg'

function LinkArrow({content, href="", options={}, arrow=true, before=true}) {
    if (!before) {
        document.querySelector(':root').style.setProperty('--pseudo-text', ' ')
    }
    return (
        <Link className={styles.link} to={href} style={options}>{content}
            {arrow && <RightArrow/>}
        </Link>
    )

}

export default LinkArrow