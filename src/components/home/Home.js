import React, {Fragment, useContext, useState} from 'react'
import imdbContext from '../../context/imdbContext'
import FlexRow from './containers/flex/row/FlexRow'
import FlexColumn from './containers/flex/column/FlexColumn'

import LinkArrow from '../common/linkArrow/LinkArrow'
import Description from '../common/description/Description'
import HeaderGrey from '../common/h4/HeaderGrey'

import Favourites from './containers/favourites/Favourites'
import Videos from './containers/videos/Videos'
import Streaming from './containers/streaming/Streaming'
import Soon from './containers/soon/Soon'
import Carousel from '../common/carousel/Carousel'
import MoreTrailers from './moreTrailers/MoreTrailers'
import Trailer from './trailer/Trailer'
import Movie from '../common/movie/Movie'

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
               <Carousel setIndex={setIndex} width={'60vw'} smallScreenWidth={'96vw'}>
                   {context.topRated ? context.topRated.items.map(x => {
                       return <Trailer key={x.id} title={x.fullTitle} imageUrl={x.image} />
                   }) : <p>...Loading</p>}
               </Carousel>
               {context.topRated ? <MoreTrailers items={context.topRated.items.slice(trailers.index, trailers.index+3)}/> : <p>...Loading</p>}
            </FlexRow>

            <FlexColumn height={'100vh'} options={{justifyContent: 'space-evenly', marginTop: '4vw'}}>
                <Description content={'What to watch'} options={{fontSize: 'var(--font-large)', paddingBottom: '3vw'}}/>
                <LinkArrow before={true} arrow={true} content={'Top picks'}/>
                <HeaderGrey content={"TV shows and movies just  for you"}/>
                <FlexRow width='95vw' height='70vh'>
                   <Carousel width='95vw'>
                        {context.top250Movies ? context.top250Movies.map(x => {
                        return <Movie key={x.id} id={x.id} title={x.fullTitle} imageUrl={x.image} rating={x.imDbRating}/>
                    }) : <p>...Loading</p>}
                    </Carousel> 
                </FlexRow>
            </FlexColumn>

            <FlexColumn height={'65vh'} options={{marginTop: '4vw', justifyContent: 'flex-start'}}>
                <LinkArrow before={true} arrow={true} content={'From your watchlist'}/>
            </FlexColumn>
            
            <FlexColumn height={'100vh'} options={{justifyContent: 'space-evenly', marginTop: '4vw'}}>
                <Description content={`This week's top TV and movies`} options={{fontSize: 'var(--font-large)', paddingBottom: '3vw'}}/>
                <LinkArrow before={true} arrow={true} content={'Fan favourites'}/>
                <HeaderGrey content={"TV shows and movies just  for you"}/>
                <FlexRow width='95vw' height='70vh'>
                   <Carousel width='95vw'>
                        {context.topRated ? context.topRated.items.map(x => {
                        return <Movie key={x.id} id={x.id} title={x.fullTitle} imageUrl={x.image} rating={x.imDbRating}/>
                    }) : <p>...Loading</p>}
                    </Carousel> 
                </FlexRow>
            </FlexColumn>

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