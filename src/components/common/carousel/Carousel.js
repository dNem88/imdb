import React, {useState, useEffect, useRef} from 'react'
import styles from './Carousel.module.css'
import ButtonCarousel from '../carousel_button/ButtonCarousel'

function Carousel({children, setIndex}) {
    const [state, setState] = useState({active: 1, sliderRect: null, windowSize: null})
    const slider = useRef()
    const absoluteContainer = useRef()
   
    useEffect(() => {
        let rect = slider.current.getBoundingClientRect()
        absoluteContainer.current.style.left = `0px`;
        setState({...state, sliderRect: rect, active: 1})
        setIndex(1)
        console.log('effect1')
    }, [state.windowSize]) 
    useEffect(() => {
         function onResize() {
             setState({
                 ...state, windowSize: window.innerWidth
             })
         }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })
    function moveLeft() {
       absoluteContainer.current.style.left = `${-state.sliderRect.width * (state.active-2)}px`;
       setState({...state, active: state.active-1})
       setIndex(state.active-1)
    }
    function moveRight() {
        absoluteContainer.current.style.left = `${-state.sliderRect.width * state.active}px`;
        setState({...state, active: state.active+1})
        setIndex(state.active + 1)
    }
    
    return (
        <div ref={slider} className={styles.container}>
            <div ref={absoluteContainer} className={styles.slider}>
                {children}
            </div>
            <ButtonCarousel onClick={moveLeft} arrow={'left'} disabled={state.active === 1 ? true : false}/>
            <ButtonCarousel onClick={moveRight} arrow={'right'} disabled={state.active === children.length ? true : false}/>
        </div>
    )
} 

export default Carousel