import React from 'react'
import styles from './MoreTrailers.module.css'
import LinkArrow from '../../common/linkArrow/LinkArrow'
import Description from '../../common/description/Description'
function MoreTrailers({trailers}) {

    return (
        <div className={styles.container}>
            <Description content={'Up next'}/>
                {trailers}
                <div></div>
                <div></div>
                <div></div>
            <LinkArrow href={'/trailers'} content={'Browse trailers'}/>
        </div>
    )
}

export default MoreTrailers