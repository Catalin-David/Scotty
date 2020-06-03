import React from 'react';
import {Logo} from './Logo/Logo';
import {Title} from './Title/Title';
import {Navigation} from './Navigation/Navigation';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    return(
        <header className={styles.Header}>
            <div className={styles.HeaderLeft}>
                <Logo />
                <Title />
            </div>
            <div className={styles.HeaderCenter}>
                <Navigation />
            </div>
            <div className={styles.HeaderRight}>
                <button className={styles.ButtonLight}>Log In</button>
                <button className={styles.ButtonDark}>Sign Up</button>
            </div>
        </header>
    )
}