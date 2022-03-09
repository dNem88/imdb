
function reducer(state, action) {
    if (action.type === 'addMovies') {
        return {...state, movies: action.payload}
    } else if (action.type === 'addTop250Movies') {
        return {
            ...state,
            top250Movies: action.payload
        }
    } else if (action.type === 'inTheatres') {
        return {
            ...state, inTheatres: action.payload
        }
    } else if (action.type === 'topRated') {
         return {
             ...state,
             topRated: action.payload
         }
    } else return {...state, error: true, errorMessage: action.payload || 'Failed to Fetch!'}
}

export default reducer