import React, {Fragment, useContext,useEffect} from 'react'
import {Route, Link} from 'react-router-dom'
import imdbContext from '../../context/imdbContext'

function Top({update}) {
    const context = useContext(imdbContext)

    
    useEffect(() => {
        update({type: 'topRated', payload: 'TOP MOVIES'})
    }, [])
    console.log(context, 'Top')
    return (
        
            <Fragment>
                <p>something</p>
                <Link to={'/about'}>About</Link>
                <Link to={'/'}>Home</Link>
            </Fragment>
   
    )
}

export default Top