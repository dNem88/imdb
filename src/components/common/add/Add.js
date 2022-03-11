import React from 'react'
import {
    ReactComponent as AddButton
} from '../../../assets/add.svg'
import styles from './Add.module.css'
import {useNavigate} from 'react-router-dom'

function Add({href}) {
    const navigate= useNavigate()
    function redirect() {
        navigate(`${href}`)
    }
    return (
        <div onClick={redirect} className={styles.container}>
            <AddButton/>
        </div>
    )
}

export default Add