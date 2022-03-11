import React from 'react'
import styles from './Trailer.module.css'
import Poster from '../../common/poster/Poster'
import Play from '../../common/playIcon/Play'

function Trailer({imageUrl, title}) {

    return (
        <div className={styles.trailer} style={{backgroundImage: `url(http://screentalk.com.au/wp-content/uploads/2019/01/hd-movie-trailers-kodi.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <Poster imageUrl={imageUrl} options={{marginLeft: '5vw', width: '27vh', height: '40vh'}}/>
            <div className={styles.description}>
                <Play href={'/trailerById'}/>
                <h1>{title}</h1>
                <h3>Watch the exclusive trailer</h3>
            </div>
        </div>
    )
}

export default Trailer