import * as React from 'react';
import { SearchBox } from '@fluentui/react';
import { sp } from '@pnp/sp/presets/all'
import { ISearchBarProps } from './ISearchBarProps';
import { ISearchBarState } from './ISearchBarState';
import SearchResultCard from './SearchResult/SearchResultCard';

export default class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
    
    constructor(props: ISearchBarProps){
        super(props);

        this.state={
            items: []
        }
    }

    public async componentDidMount(){
        sp.setup(this.props.context)
    }

    private loadSearchResults = async (text: string) => {
        this.setState({
            items: []
        });

        if(text.length === 0){
            return;
        }

        const allJourneys: any[] = await sp.web.lists.getByTitle("JourneyList").items.get();

        //const filteredResults: any[] = allJourneys.filter(item => item.Title.includes(text))

        this.setState({
            items: allJourneys.filter(item => item.Title.includes(text))
        });
    }

    public render(){
        return (
            <div>
                <SearchBox placeholder="Search journeys" onChange={(_ , newValue) => this.loadSearchResults(newValue)}/>
                {
                    this.state.items.length !== 0 ?
                        <ul>
                            {this.state.items.map(item => 
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
}