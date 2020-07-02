import * as React from 'react';
import styles from './Client.module.scss';
import { IClientProps } from './IClientProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SearchBox } from '@fluentui/react';
import SearchBar from './SearchBar/SearchBar';
import { sp } from '@pnp/sp';

export default class Client extends React.Component<IClientProps, {}> {

  public render(): React.ReactElement<IClientProps> {
    return (
      <div className={ styles.client }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <SearchBar context={this.props.context}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
