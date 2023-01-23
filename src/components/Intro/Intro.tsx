import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIntroScreen } from '../../store/Map/reducer';
import { selectIntroScreenEnabled } from '../../store/Map/selectors';
import * as styles from './Intro.module.css';

const Intro = () => {
  const [visibleState, setVisibleState] = useState('problem');
  const introScreenEnabled = useSelector(selectIntroScreenEnabled);
  const dispatch = useDispatch();
  return (
    introScreenEnabled && (
      <div className={styles.introContainer}>
        <div className={styles.solutionImage} style={{ opacity: visibleState === 'solution' ? 0.6 : 0 }}></div>
        <div className={styles.introContent}>
          <div className={styles.titleContainer}>
            {visibleState === 'problem' ? (
              <p className={styles.introTitle}>
                The ocean's health is fundamental to Earth's survival, yet 95 percent of the ocean remains a mystery. In
                a world of accelerating climate change and population pressures, a better understanding of the ocean is
                necessary to reduce the risk of critically damaging or exhausting marine resources.
              </p>
            ) : (
              <p className={styles.introTitle}>
                Based on the{' '}
                <a href='https://www.ncei.noaa.gov/products/world-ocean-atlas' target='_blank'>
                  World Ocean Atlas
                </a>
                ' global ocean variable measurements we classified the oceanic water bodies into 37 volumetric regions,
                called{' '}
                <a href='https://www.esri.com/en-us/about/science/ecological-marine-units/overview' target='_blank'>
                  ecological marine units
                </a>
                . These volumetric region units can be used to support climate change impact studies, conservation
                priority setting, and marine spatial planning.
              </p>
            )}
          </div>
          <div className={styles.buttons}>
            <div>
              <button
                className={`${styles.introButton} ${visibleState === 'problem' ? styles.opaque : styles.transparent}`}
                onClick={() => {
                  setVisibleState('problem');
                }}
              >
                The Problem
              </button>
              <button
                className={`${styles.introButton} ${visibleState === 'solution' ? styles.opaque : styles.transparent}`}
                onClick={() => {
                  setVisibleState('solution');
                }}
              >
                The Solution
              </button>
            </div>
            <button
              className={styles.exploreButton}
              onClick={() => {
                dispatch(toggleIntroScreen());
              }}
            >
              Explore data
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Intro;
