import React from 'react';
import { Journey } from './Journey.model';
import styles from './JourneyCard.module.css';
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import StarRateIcon from '@material-ui/icons/StarRateRounded'
import ScheduleIcon from '@material-ui/icons/Schedule'

export const JourneyCard: React.FC<{journey: Journey}> = ({journey}) => {
    return (
        <div className={styles.JourneyCard}>
            <img src={require(`../../../assets/${journey.image}`)} alt="Journey"/>
            <h3>{journey.title}</h3>
            <ul>
                <li>
                    <span className={styles.CardEntry}>
                        <TrendingUpIcon/>
                        <p>{journey.level}</p>
                    </span>
                </li>
                <li>
                    <span className={styles.CardEntry}>
                        <StarRateIcon />
                        <p>{journey.rating}/5</p>
                    </span>
                </li>
                <li>
                    <span className={styles.CardEntry}>
                        <ScheduleIcon />
                        <p>{journey.duration} hours</p>
                    </span>
                </li>
            </ul>
        </div>
    );
}