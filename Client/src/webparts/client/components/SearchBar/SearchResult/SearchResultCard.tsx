import React, {useState} from 'react';
import {PrimaryButton} from '@fluentui/react'

export const SearchResultCard: React.FC<{item: any}> = ({item}) => {

    const [showDetails, setShowDetails] = useState(false);

    //this.toggleDetailsState = this.toggleDetailsState.bind(this)

    return (
        <div onClick={() => setShowDetails(!showDetails)}>
            <p>{item.Title}</p>
            {
                showDetails ?
                    <>
                    <ul>
                        <li>Difficulty: {item.Difficulty}</li>
                        <li>Rating: {item.Rating}/5</li>
                        <li>Duration: {item.Duration} hours</li>
                    </ul>
                    <PrimaryButton text="Begin journey"/>
                    </>
                : null
            }
        </div>
    )
}