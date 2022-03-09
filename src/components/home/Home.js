import React, {Fragment, useContext} from 'react'
import imdbContext from '../../context/imdbContext'
import Trailers from './containers/trailers/Trailers'
import Watchlist from './containers/watchlist/Watchlist'
import Favourites from './containers/favourites/Favourites'
import Videos from './containers/videos/Videos'
import Streaming from './containers/streaming/Streaming'
import Soon from './containers/soon/Soon'
import Carousel from '../common/carousel/Carousel'

function Home() {
    const context = useContext(imdbContext)
    console.log(context)
    /*API CALLS => 
        1/Trailers
        2/ComingSoon
        3/MostPopulatMovies*/
   
    return (
        <Fragment>
            <Trailers>
               <Carousel>
                   <section>1</section>
                   <section>2</section>
                   <section>3</section>
                   <section>4</section>
               </Carousel>
            </Trailers>
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