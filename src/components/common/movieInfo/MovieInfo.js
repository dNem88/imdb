import React from 'react'
import styles from './MovieInfo.module.css'
import {Link} from 'react-router-dom'
import FlexRow from '../../home/containers/flex/row/FlexRow'
import Menu from '../../navigation/menu/Menu'

function MovieInfo({title, id, rating}) {



    return (
        <FlexRow height={'45%'} width={'100%'} options={{backgroundColor: 'var(--color-medium-grey)', padding: '.5vw', flexWrap: 'wrap', justifyContent: 'center', borderBottom: '1px solid transparent', borderBottomLeftRadius: '.5rem', borderBottomRightRadius: '.5rem'}}>
            <FlexRow height={'20%'} width={'100%'} options={{backgroundColor: 'var(--color-medium-grey)', justifyContent: 'flex-start'}}>
                <Menu text={rating} icon={true} type="star" options={{width: '35%', color: 'var(--text-color-grey)', backgroundColor: 'var(--color-medium-grey)', fontSize: 'clamp(1.2rem, 1.7vw, 2rem)'}}/>
                <Menu text={''} icon={true} type="rate" options={{width: '35%', color: 'var(--text-color-grey)', backgroundColor: 'var(--color-medium-grey)', fontSize: 'clamp(1.2rem, 1.7vw, 2rem)'}} href={'/rate'}/>
            </FlexRow>
            <div className={styles['link-container']}>
                <Link  to={`/movies/${id}`}>{title}</Link>
            </div>
           <Menu text={'Watchlist'} icon={true} type="add" href={'/watchlist'} options={{width: '100%', color: 'var(--color-blue)'}}/>
           <Menu text={'Trailer'} icon={true} type="play" href={`/trailers/${id}`} options={{width: '50%', alignSelf: 'center'}}/>
        </FlexRow>
    )
}

export default MovieInfo