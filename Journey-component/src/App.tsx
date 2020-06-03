import React from 'react';
import { Header } from './components/Header/Header';
import Journeys from './components/Journeys/Journeys';
import { initializeIcons } from '@uifabric/icons';
import styles from './App.module.css';
import { Icon } from '@fluentui/react/lib/Icon';

function App() {
  initializeIcons()
  return (
    <div className={styles.App}>
      <Header />
      <Journeys />
    </div>
  );
}
export default App