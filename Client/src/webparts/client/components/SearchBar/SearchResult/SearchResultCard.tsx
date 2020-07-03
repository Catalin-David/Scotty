import * as React from 'react';
import {ISearchResultProps} from "./ISearchResultProps";
import {ISearchResultState} from "./ISearchResultState";
import {PrimaryButton} from '@fluentui/react';

export default class SearchResultCard extends React.Component<ISearchResultProps, ISearchResultState>{

    constructor(props: ISearchResultProps){
        super(props);

        this.toggleDetailsState = this.toggleDetailsState.bind(this)
        this.state={
            showDetails: false
        };
    }

    public toggleDetailsState(){  
        const newDetailsState = this.state.showDetails ? false : true

        this.setState({
            showDetails: newDetailsState
        });
    }

    public render(){
        return (
            <div onClick={this.toggleDetailsState}>
                <p>{this.props.item.Title}</p>
                {
                    this.state.showDetails ?
                        <div>
                            <p>Difficulty: {this.props.item.Difficulty}</p>
                            <p>Rating: {this.props.item.Rating}/5</p>
                            <p>Duration: {this.props.item.Duration} hours</p>
                            <PrimaryButton text="Begin journey" onClick={this.props.clickHandler}/>
                        </div>
                    : <div></div>
                }
            </div>
        )
    }
}