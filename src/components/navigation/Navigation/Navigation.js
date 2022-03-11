import React, {useState} from 'react'
import styles from './Navigation.module.css'
import {ReactComponent as Logo} from '../../../assets/logo.svg'
import Menu from '../menu/Menu'
import SearchBar from '../search/SearchBar'
import ActiveNav from '../ActiveNav/ActiveNav'


function Navigation() {
    const [active, setActive] = useState({active: false})
    function clickHandler(e) {
        setActive({active: !active.active})
    }
    console.log(active)
    return (
        <nav className={styles.navigation}>
            <Logo/>
            <Menu icon={true} text={'Menu'} clickHandler={clickHandler} activeNav={active.active}/>
            <SearchBar/>
            <Menu text={'IMDb Pro'} options={{fontWeight: 'bolder'}}/>
            <Menu icon={true} text={'Watchlist'} type={'add'}  href={'/watchlist'}/>
            <Menu text={'Sign in'} href={'/auth/login'} />
            {active.active && <ActiveNav/>}
        </nav>
        
    )
}

export default Navigation