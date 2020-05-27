import React from 'react';
import PageLink from './PageLink/PageLink';
import styles from './Navigation_centre.module.css';

const navigation_centre: React.FC = () => {
    return (
        <div className={styles.NavigationCentre}>
            <div className={styles.Page}>
                <PageLink text="Home"/>
            </div>
            <div className={styles.PageSelected}>
                <PageLink text="Journeys"/>
            </div>
            <div className={styles.Page}>
                <PageLink text="Discover"/>
            </div>
        </div>
    );
}

export default navigation_centre;