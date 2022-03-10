import React from 'react'
import styles from './Trailer.module.css'

function Trailer({imageUrl, title}) {

    return (
        <div className={styles.trailer} style={{backgroundImage: `url(http://screentalk.com.au/wp-content/uploads/2019/01/hd-movie-trailers-kodi.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className={styles['poster-container']}>
                <img src={imageUrl} alt='movie-poster' loading='lazy'/>
            </div>
            <div className={styles.description}>
                <p>PLAY</p>
                <h1>{title}</h1>
                <p>Watch the exclusive</p>
            </div>
        </div>
    )
}

export default Trailer