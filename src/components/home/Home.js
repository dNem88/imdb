import React, {Fragment} from 'react'
import Trailers from './containers/trailers/Trailers'
import Watchlist from './containers/watchlist/Watchlist'
import Favourites from './containers/favourites/Favourites'
import Videos from './containers/videos/Videos'
import Streaming from './containers/streaming/Streaming'
import Soon from './containers/soon/Soon'

function Home() {
   
    return (
        <Fragment>
            <Trailers movies={'to do'}>

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