import { useState } from 'react';
import * as styles from './Intro.module.css';

const Intro = () => {
  const [visibleState, setVisibleState] = useState('problem');
  return (
    <div className={styles.introContainer}>
      <div className={styles.introContent}>
        <div className={styles.titleContainer}>
          {visibleState === 'problem' ? (
            <p className={styles.introTitle}>
              In a world of accelerating climate change and population pressures, a better understanding of the ocean is
              necessary to reduce the risk of critically damanging or exhausting marine resources.
            </p>
          ) : (
            <p className={styles.introTitle}>
              Based on 52 million global measurements of six key ocean variables over 102 depth zones we clustered the
              data into ecological marine units. The result is a standardised set of units that may be used to support
              climate change impact studies or marine spatial planning. In this application we visualize the data as a
              voxel layer.
            </p>
          )}
        </div>
        <div className={styles.buttons}>
          <div>
            <button
              className={styles.introButton}
              style={{ opacity: visibleState === 'problem' ? 1 : 0.4 }}
              onClick={() => {
                setVisibleState('problem');
              }}
            >
              The Problem
            </button>
            <button
              className={styles.introButton}
              style={{ opacity: visibleState === 'solution' ? 1 : 0.4 }}
              onClick={() => {
                setVisibleState('solution');
              }}
            >
              The Solution
            </button>
          </div>
          <button className={styles.exploreButton} onClick={() => {}}>
            Explore data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
