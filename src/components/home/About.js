import React, {Fragment, useContext,useEffect} from 'react'
import { Link} from 'react-router-dom'
import imdbContext from '../../context/imdbContext'

function About({update}) {
    const context = useContext(imdbContext)

    useEffect(() => {
        update({
            type: 'addTop250Movies',
            payload: 'TOP 250 Movies'
        })
    }, [])
    console.log(context, 'ABOUT')
    return (
        
            <Fragment>
                <p>about</p>
                <Link to={'/'}>home</Link>
                <Link to={'/top'}>Top</Link>
            </Fragment>
   
    )
}

export default About