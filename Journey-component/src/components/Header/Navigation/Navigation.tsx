import React from 'react';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
    
    return(
        <nav  className={styles.Navigation}>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Journeys
                </li>
                <li>
                    Discover
                </li>
            </ul>
        </nav>
    );
}