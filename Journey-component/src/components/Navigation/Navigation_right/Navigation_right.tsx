import React from 'react';
import styles from './Navigation_right.module.css';

const NavigationRight: React.FC = () => {
    return (
        <div className={styles.NavigationRight}>
            <button className={styles.ButtonLight}>Log In</button>
            <button className={styles.ButtonDark}>Sign Up</button>
        </div>
    );
}

export default NavigationRight;