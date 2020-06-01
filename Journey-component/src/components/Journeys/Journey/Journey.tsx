import React, {useState} from 'react';
import { JourneyModel } from './Journey.model';
import styles from './Journey.module.css';

const Journey: React.FC<JourneyModel> = props => {
    const [isHovered, setHover] = useState<boolean>(false);

    const toggleHover = () => {
        setHover(isHovered => !isHovered)
    }

    return (
        <div className={styles.Journey} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <h3>{props.title}</h3>
            {   isHovered ?
                    <div>
                        <p>The journey is intended for {props.level} level users</p>
                        <p>The rating is {props.rating} out of 5</p>
                        <p>The duration of this journey is {props.duration} hours</p>
                    </div>
                    :
                    <img src={require(`../../../assets/${props.image}`)} alt="journey"/>
            }

        </div>
    );
}

export default Journey;