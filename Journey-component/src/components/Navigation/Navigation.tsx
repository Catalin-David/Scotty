import React from 'react';
import NavigationLeft from './Navigation_Left/Navigation_Left';
import NavigationCentre from './Navigation_centre/Navigation_centre';
import NavigationRight from './Navigation_right/Navigation_right';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
    
    return (
        <div className={styles.Navigation}>
            <NavigationLeft />
            <NavigationCentre />
            <NavigationRight />
        </div>
    );
}