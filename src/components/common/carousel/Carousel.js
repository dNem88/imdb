import React, {useState, useEffect, useRef} from 'react'
import styles from './Carousel.module.css'
import ButtonCarousel from '../carousel_button/ButtonCarousel'

function Carousel({children, setIndex=null, width, smallScreenWidth}) {
    const [state, setState] = useState({active: 1, sliderRect: null, windowSize: null})
    
    const slider = useRef()
    const absoluteContainer = useRef()
    
    useEffect(() => {
        let rect = slider.current.getBoundingClientRect()
        absoluteContainer.current.style.left = `0px`;
        setState({...state, sliderRect: rect, active: 1})
        if (setIndex) {
            setIndex(1)
        }
        if (window.innerWidth < 850 && smallScreenWidth) {
            slider.current.style.width = smallScreenWidth
        }
    }, [state.windowSize]) 
    
    useEffect(() => {
         function onResize() {
             setState({
                 ...state, windowSize: window.innerWidth
             })
             if (window.innerWidth < 850 && smallScreenWidth) {
                 slider.current.style.width = smallScreenWidth
             }
             if (window.innerWidth > 850 && smallScreenWidth) {
                 slider.current.style.width = width;
             }
         }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })

    function moveLeft() {
       absoluteContainer.current.style.left = `${-state.sliderRect.width * (state.active-2)}px`;
       setState({...state, active: state.active-1})
       if (setIndex) {
           setIndex(state.active-1)
       }
    }
    function moveRight() {
        absoluteContainer.current.style.left = `${-state.sliderRect.width * state.active}px`;
        setState({...state, active: state.active+1})
        if (setIndex) {
            setIndex(state.active + 1)
        }
    }
    return (
        <div ref={slider} className={styles.container} style={{width: width}}>
            <div ref={absoluteContainer} className={styles.slider} >
                {children}
            </div>
            <ButtonCarousel onClick={moveLeft} arrow={'left'} disabled={state.active === 1 ? true : false}/>
            <ButtonCarousel onClick={moveRight} arrow={'right'} disabled={state.active === children.length ? true : false}/>
        </div>
    )
} 

export default Carousel