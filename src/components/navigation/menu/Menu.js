import React from 'react'
import {useNavigate} from 'react-router-dom'
import {ReactComponent as MenuIcon} from '../../../assets/menu.svg'
import styles from './Menu.module.css'
import {ReactComponent as Add} from '../../../assets/add.svg'
import {ReactComponent as Play} from '../../../assets/play2.svg'
import {ReactComponent as Star} from '../../../assets/star.svg'
import {ReactComponent as Rate} from '../../../assets/rateStar.svg'

function Menu({
    text,
    icon = false,
    options,
    type = 'menu',
    href = '',
    clickHandler,
}) {

    const icons = {
        add: <Add href={'/watchlist'}/>,
        menu: <MenuIcon/>,
        play: <Play/>, 
        star: <Star style={
            {
                fill: 'var(--color-main)',
                width: 'clamp(1rem, 1.3vw, 2rem)',
                height: 'clamp(1rem, 1.3vw, 2rem)'
            }
        }/>,
        rate: <Rate style={{fill: 'var(--color-blue)'}}/>
    }
    const navigate = useNavigate()
  
    return (
        <div  className={styles.container} onClick={href ? () => navigate(`${href}`) : clickHandler} style={options}>
            {icon && type && icons[type]}
            <div className={styles['p-container']}>
                <p >{text}</p>
            </div>
        </div>
    )
}

export default Menu