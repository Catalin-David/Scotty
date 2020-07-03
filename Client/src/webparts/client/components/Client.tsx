import * as React from 'react';
import styles from './Client.module.scss';
import { IClientProps } from './IClientProps';
import SearchBar from './SearchBar/SearchBar';

export const Client: React.FC<{props: IClientProps}> = ({props}) => {

    return (
      <div className={ styles.client }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <SearchBar context={props.context}/>
            </div>
          </div>
        </div>
      </div>
    );
}
