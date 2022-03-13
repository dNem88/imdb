import React from 'react'
import styles from './Movie.module.css'
import Poster from '../poster/Poster'
import FlexColumn from '../../home/containers/flex/column/FlexColumn'
import MovieInfo from '../movieInfo/MovieInfo'

function Movie({title, imageUrl, id, rating}) {


    return (
        <FlexColumn width='29vh' height='70vh' options={{justifyContent: 'flex-start', zIndex: '0', marginRight: '1.5vw'}}>
            <Poster imageUrl={imageUrl} options={{width: '100%', height: '55%'}}/>
            <MovieInfo title={title} id={id} rating={rating}/>
        </FlexColumn>
    )
}


export default Movie