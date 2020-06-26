import React from 'react';
import { Header } from './components/Header/Header';
import Journeys from './components/JourneysOverview/JourneysOverview';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Journeys />
    </div>
  );
}
export default App