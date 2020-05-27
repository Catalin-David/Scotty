import React from 'react';
import logo from '../../../../assets/Logo.svg';
import styles from './Logo.module.css'

const Logo: React.FC = () => {
    return(
        <div className={styles.Logo}>
            <img src={logo} alt="MyScotty"/>
        </div>

    );
}

export default Logo;