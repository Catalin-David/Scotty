import React from 'react';
import { Journey } from './Journey.model';
import styles from './JourneyOverview.module.css';
import {Icon} from '@fluentui/react/lib/Icon';

export const JourneyOverview: React.FC<{journey: Journey}> = ({journey}) => {
    return (
        <div className={styles.JourneyOverview}>
            <h3>{journey.title}</h3>
            <ul>
                <li>
                    <Icon iconName='LineChart'/>
                    <p>The journey is intended for {journey.level} level users</p>
                </li>
                <li>
                    <Icon iconName='FavoriteStar'/>
                    <p>The rating is {journey.rating} out of 5</p>
                </li>
                <li>
                    <Icon iconName='BufferTimeBoth'/>
                    <p>The duration of this journey is {journey.duration} hours</p>
                </li>
            </ul>
            <img src={require(`../../../assets/${journey.image}`)} alt="Journey"/>
        </div>
    );
}