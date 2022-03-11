import React, {Fragment, useContext, useState} from 'react'
import imdbContext from '../../context/imdbContext'
import FlexRow from './containers/flex/row/FlexRow'
import Watchlist from './containers/watchlist/Watchlist'
import Favourites from './containers/favourites/Favourites'
import Videos from './containers/videos/Videos'
import Streaming from './containers/streaming/Streaming'
import Soon from './containers/soon/Soon'
import Carousel from '../common/carousel/Carousel'
import MoreTrailers from './moreTrailers/MoreTrailers'
import Trailer from './trailer/Trailer'

function Home() {
    const context = useContext(imdbContext)
    console.log(context)
    const [trailers, setTrailers] = useState({trailers: null, error: null, errorMessage: null, index: 0})
    /*API CALLS => 
        1/Trailers
        2/ComingSoon
        3/MostPopulatMovies*/
    function setIndex(index) {
        setTrailers({...trailers, index: index-1});
    }
    console.log(trailers)
    return (
        <Fragment>
            <FlexRow options={{marginBottom: '2vw'}}>
               <Carousel setIndex={setIndex}>
                   {context.topRated ? context.topRated.items.map(x => {
                       return <Trailer key={x.id} title={x.fullTitle} imageUrl={x.image} />
                   }) : <p>...Loading</p>}
               </Carousel>
               {context.topRated ? <MoreTrailers items={context.topRated.items.slice(trailers.index, trailers.index+3)}/> : <p>...Loading</p>}
               
            </FlexRow>
            <Watchlist>

            </Watchlist>
            <Favourites>

            </Favourites>
            <Videos>

            </Videos>
            <Streaming>

            </Streaming>
            <Soon>

            </Soon>
        </Fragment>  
    )
}

export default Home