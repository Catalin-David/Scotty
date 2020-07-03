import React, {useState, useEffect} from 'react';
import { SearchBox } from '@fluentui/react';
import { sp } from '@pnp/sp/presets/all'
import { WebPartContext } from '@microsoft/sp-webpart-base'
import { SearchResultCard } from './SearchResult/SearchResultCard';

export const SearchBar: React.FC<{context: WebPartContext}> = ({context}) => {
    
    const [items, setItems] = useState([])

    useEffect( () => {
        sp.setup(context)
    });

    const loadSearchResults = async (text: string) => {
        setItems([]);

        if(text.length === 0){
            return;
        }

        const allJourneys: any[] = await sp.web.lists.getByTitle("JourneyList").items.get();

        setItems(
            allJourneys.filter(item => item.Title.includes(text))
        );
    }

    return (
        <div>
            <SearchBox placeholder="Search journeys" onChange={(_ , newValue) => loadSearchResults(newValue)}/>
            {
                items.length !== 0 ?
                    <ul>
                        {items.map(item => 
                            <li>
                                <SearchResultCard item={item}/>
                            </li>)
                        }
                    </ul>
                :
                <div>No results found ...</div>
            }
        </div>
    )
}