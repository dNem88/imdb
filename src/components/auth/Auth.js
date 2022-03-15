import React from 'react'
import SignInScreen from './firebase'
import FlexRow from '../home/containers/flex/row/FlexRow'
import styles from './Auth.module.css'

function Auth({dispatch}) {


    return (
        <FlexRow width={'100vw'} height={'70vh'} backgroundColor={'black'} options={{justifyContent: 'center'}}>
             <FlexRow width={'70vw'} height={'70vh'} backgroundColor={'white'}>
                <div className={styles.firebase}>
                    <SignInScreen dispatch={dispatch}/>
                </div>
                <div className={styles.description}>

                </div>
            </FlexRow>
        </FlexRow>
       
    )
}

export default Auth