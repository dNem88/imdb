import React, {Fragment} from 'react'
import styles from './Poster.module.css'
import Add from '../add/Add'

function Poster({imageUrl,options={width: '30vh', height: '35vh'}, link=true, href='/'}) {

    return (
            <div className={styles['poster-container']} style={options}>
                <img src={imageUrl} alt='movie-poster' loading='lazy'/>
                {link && <Add href={href}/>}
            </div>
    )
}

export default Poster
