import React, {useState, useEffect, useRef} from 'react'
import styles from './Carousel.module.css'

function Carousel({children}) {
    const [state, setState] = useState({active: 1, sliderRect: null})
    const slider = useRef()
    const absoluteContainer = useRef()
   
    useEffect(() => {
        let rect = slider.current.getBoundingClientRect()
        absoluteContainer.current.style.left = `0px`;
        setState({...state, sliderRect: rect, active: 1})
        window.addEventListener('resize', () => {
            setState({
                active: 1,
                sliderRect: slider.current.getBoundingClientRect()
            })
            absoluteContainer.current.style.left = `0px`;
        })
    }, []) 
    
    function moveLeft() {
       absoluteContainer.current.style.left = `${-state.sliderRect.width * (state.active-2)}px`;
       setState({...state, active: state.active-1})
    }
    function moveRight() {
        absoluteContainer.current.style.left = `${-state.sliderRect.width * state.active}px`;
        setState({...state, active: state.active+1})
    }
    
    return (
        <div ref={slider} className={styles.container}>
            <div ref={absoluteContainer} className={styles.slider}>
                {children}
            </div>
            <button onClick={moveLeft} disabled={state.active === 1 ? true : false}>LEFT</button>
            <button onClick={moveRight} disabled={state.active === children.length ? true : false}>RIGHT</button>
        </div>
    )
} 

export default Carousel