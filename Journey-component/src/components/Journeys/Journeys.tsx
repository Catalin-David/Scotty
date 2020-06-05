import React, {useState} from 'react';
import { Journey } from './Journey/Journey.model';
import { JourneyOverview } from './Journey/JourneyOverview';
import styles from './Journeys.module.css';

const Journeys: React.FC = () => {

    const [journeys, setJourneys] = useState<Journey[]>([
        {
            id: 0,
            title: 'Fundamentals of front-end development',
            level: 'Beginner',
            rating: 3.4,
            duration: 13.4,
            image: 'web-dev.jpg',
        },
        {
            id: 1,
            title: 'Front-end development',
            level: 'Intermediate',
            rating: 4.7,
            duration: 8.4,
            image: 'web-dev-2.jpg'
        },
        {
            id: 2,
            title: 'Front-end development master course',
            level: 'Difficult',
            rating: 4.9,
            duration: 10.3,
            image: 'web-dev-3.jpg'
        },
        {
            id: 3,
            title: 'Basics of back-end development',
            level: 'Beginner',
            rating: 4.2,
            duration: 5.2,
            image: 'back-end.png'
        },
        {
            id: 4,
            title: 'Back-end for enthusiasts',
            level: 'Intermediate',
            rating: 4.4,
            duration: 6.5,
            image: 'back-end-2.jpg'
        },
        {
            id: 5,
            title: 'How to build an enterprise level back-end',
            level: 'Difficult',
            rating: 5,
            duration: 20.3,
            image: 'back-end-1.jpg'
        },
        {
            id: 6,
            title: 'Machine learning for complete beginners',
            level: 'Beginner',
            rating: 4.7,
            duration: 9,
            image: 'ml-1.jpeg'
        },
        {
            id: 7,
            title: 'Neural networks',
            level: 'Intermediate',
            rating: 4.9,
            duration: 12,
            image: 'ml-2.jpg'
        },
        {
            id: 8,
            title: 'Master of Artificial Intelligence',
            level: 'Difficult',
            rating: 5,
            duration: 40.2,
            image: 'ml-3.jpg'
        }
    ]);

    return (
        <main>
            <ul className={styles.Journeys}>
                {
                    journeys.map(journey =>
                        <li key={journey.id}>
                            <JourneyOverview 
                                journey = {journey}
                            />      
                        </li>
                    )
                }
            </ul>
        </main>
    );
}

export default Journeys;