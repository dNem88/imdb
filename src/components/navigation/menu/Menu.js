import React from 'react'
import {useNavigate} from 'react-router-dom'
import {ReactComponent as MenuIcon} from '../../../assets/menu.svg'
import styles from './Menu.module.css'
import {ReactComponent as Add} from '../../../assets/add.svg'

function Menu({
    text,
    icon = false,
    options,
    type = 'menu',
    href = '',
    clickHandler,
}) {
    const navigate = useNavigate()
    return (
        <div className={styles.container} onClick={href ? () => navigate(`${href}`) : clickHandler}>
            {icon && type === 'menu' && <MenuIcon/>}
            {icon && type === 'add' && <Add href={'/watchlist'}/>}
            <p style={options}>{text}</p>
        </div>
    )
}

export default Menu