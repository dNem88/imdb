import React from 'react'

const imdbContext = React.createContext({
    movies: null,
    tvSeries: null,
    error: null,
    errorMessage: null,
    user: null
})

export default imdbContext