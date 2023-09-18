import React from 'react';
import Menu from './Components/Menu';
import Overview from './Components/Overview';
import Styles from './ProgressTracker.module.css';

export default function ProgressTracker() {
  return (
    <div className={Styles.pageContainer}>
        <Menu />
        <Overview />
    </div>
  )
}
