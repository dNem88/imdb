import React from 'react'
import styles from './ButtonCarousel.module.css'
import {ReactComponent as LeftArrow} from '../../../assets/leftArrow.svg'
import {ReactComponent as RightArrow} from '../../../assets/rightArrow.svg'
function ButtonCarousel({onClick, arrow, disabled}) {

    return (
        <button onClick={onClick} className={styles.button} disabled={disabled}>
            {arrow === 'left' ? <LeftArrow/> : <RightArrow/>}
        </button>
       
    )
}

export default ButtonCarousel