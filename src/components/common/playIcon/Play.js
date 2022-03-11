import React from 'react'
import {ReactComponent as Icon} from '../../../assets/play.svg'
import styles from './Play.module.css'
import {useNavigate} from 'react-router-dom'

function Play({href}) {
    const navigate = useNavigate()

    function redirect() {
        navigate(href)
    }
    return (
        <div onClick={redirect} className={styles.container}>
            <Icon/>
        </div>
    )
}

export default Play;