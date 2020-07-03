import React, {useState} from 'react';
import {PrimaryButton} from '@fluentui/react'
import {ISearchResultProps} from "./ISearchResultProps";

export const SearchResultCard: React.FC<{props: ISearchResultProps}> = ({props}) => {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div onClick={() => setShowDetails(!showDetails)}>
            <p>{props.item.Title}</p>
            {
                showDetails ?
                    <>
                    <ul>
                        <li>Difficulty: {props.item.Difficulty}</li>
                        <li>Rating: {props.item.Rating}/5</li>
                        <li>Duration: {props.item.Duration} hours</li>
                    </ul>
                    <PrimaryButton text="Begin journey" onClick={props.clickHandler}/>
                    </>
                : null
            }
        </div>
    )
}