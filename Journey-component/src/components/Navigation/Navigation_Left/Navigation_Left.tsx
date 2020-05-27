import React from 'react';
import Logo from './Logo/Logo';
import Title from './Title/Title';
import styles from './Navigation_left.module.css';

const navigation_left: React.FC = () => {
    return (
        <div className={styles.NavigationLeft}>
            <Logo />
            <Title />
        </div>
    );
}

export default navigation_left;