import React, {useState, useEffect} from 'react';
import { SearchBox } from '@fluentui/react';
import { sp } from '@pnp/sp/presets/all'
import { WebPartContext } from '@microsoft/sp-webpart-base'
import { SearchResultCard } from './SearchResult/SearchResultCard';
import { GoalPopUp } from './GoalPopUp/GoalPopUp';

export const SearchBar: React.FC<{context: WebPartContext}> = ({context}) => {
    
    const [searchResults, setSearchResults] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const [selectedJourneyId, setSelectedJourneyId] = useState(0);

    useEffect( () => {
        sp.setup(context)
    });

    const toggleShowPopUp = () => {
        setShowPopUp(!showPopUp)
    }

    const loadSearchResults = async (text: string) => {
        setSearchResults([]);

        if(text.length === 0){
            return;
        }

        const allJourneys: any[] = await sp.web.lists.getByTitle("JourneyList").items.get();

        setSearchResults(
            allJourneys.filter(item => item.Title.includes(text))
        );
    }

    const changeSelectedJourneyAndShowPopUp = (journeyID: number) => {
        setSelectedJourneyId(journeyID)
        toggleShowPopUp()
    }

    const beginNewJourney = async (goalEndDate: string) => {
        const connectedUserEmail = (await sp.web.currentUser.get()).Email;

        const date = new Date();
        const startDate: string = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;

        await sp.web.lists.getByTitle("UserJourneys").items.add({
            Title: connectedUserEmail,
            JourneyId: selectedJourneyId,
            StartDate: startDate,
            Goalfinishdate: goalEndDate
        });
    }

    const receiveGoalDateFromChild = (receivedGoalDateFromChild: string) => {
        toggleShowPopUp()
        beginNewJourney(receivedGoalDateFromChild);
    }

    return (
        <div>
            <SearchBox placeholder="Search journeys" onChange={(_ , newValue) => loadSearchResults(newValue)}/>
            {
                searchResults.length !== 0 ?
                    <ul>
                        {searchResults.map(item => 
                            <li>
                                <SearchResultCard props={{item: item, clickHandler:() => changeSelectedJourneyAndShowPopUp(item.ID)}}/>
                            </li>)
                        }
                    </ul>
                :
                <div>No results found ...</div>
            }
            <div>
                { showPopUp ? <GoalPopUp toggleShowGoalPopUp={toggleShowPopUp} sendDateToParent={receiveGoalDateFromChild}/> : null }
            </div>
        </div>
    )
}