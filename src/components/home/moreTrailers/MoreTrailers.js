import React from 'react'
import styles from './MoreTrailers.module.css'
import LinkArrow from '../../common/linkArrow/LinkArrow'
import Description from '../../common/description/Description'
import Poster from '../../common/poster/Poster'
import Play from '../../common/playIcon/Play'

function MoreTrailers({items}) {
    
    return (
        <div className={styles.container}>
            <Description content={'Up next'}/>
                {items && items.map(x => {
                    return <div className={styles.movie}>
                                <Poster imageUrl={x.image} options={{gridArea: '1/1/7/3'}} link={false}/>
                                <Play href={`/trailers/${x.id}`}/>
                                <h3>{x.title}</h3>
                                <h4>Watch the exclusive trailer</h4>
                            </div>
                })

                }
            <LinkArrow href={'/trailers'} content={'Browse trailers'}/>
        </div>
    )
}

export default MoreTrailers