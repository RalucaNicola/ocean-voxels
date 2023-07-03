import * as styles from './ToolsMenu.module.css';
import '@esri/calcite-components/dist/components/calcite-switch';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-button';
import { CalciteButton, CalciteLabel, CalciteSwitch } from '@esri/calcite-components-react';
import LegendContainer from '../Legend/LegendContainer';
import {
  selectSliceEnabled,
  selectSectionEnabled,
  selectHoverEnabled,
  selectScaleEnabled,
  selectToolsMenuVisible
} from '../../store/Map/selectors';
import {
  setSlicePlaneOrientation,
  toggleSection,
  toggleSlice,
  toggleHoverEnabled,
  toggleScaleEnabled,
  setToolsMenuVisible
} from '../../store/Map/reducer';
import { useDispatch, useSelector } from 'react-redux';
import Section from './Section';
import OffsetSlider from './OffsetSlider';
import IsosurfaceSlider from './IsosurfaceSlider';
import useIsDesktopSize from '../../hooks/useIsDesktopSize';
import Bookmark from './Bookmark';

const ToolsMenu = () => {
  const toolsMenuVisible = useSelector(selectToolsMenuVisible);
  const sliceEnabled = useSelector(selectSliceEnabled);
  const sectionEnabled = useSelector(selectSectionEnabled);
  const hoverEnabled = useSelector(selectHoverEnabled);
  const scaleEnabled = useSelector(selectScaleEnabled);
  const isDesktopSize = useIsDesktopSize();
  const dispatch = useDispatch();
  return (
    <div className={isDesktopSize ? styles.container : styles.mobileContainer}>
      <div
        className={styles.toolsContainer}
        style={
          toolsMenuVisible
            ? isDesktopSize
              ? { maxWidth: '30vw' }
              : { display: 'revert', maxWidth: '100vh' }
            : isDesktopSize
            ? { maxWidth: 0 }
            : { display: 'none' }
        }
      >
        {' '}
        {!isDesktopSize && (
          <div className={styles.closeHeader}>
            <h2>Tools</h2>
            <button
              className={styles.closeButton}
              onClick={() => {
                dispatch(setToolsMenuVisible(false));
              }}
            >
              <img src='./assets/close.svg'></img>
            </button>
          </div>
        )}
        <div
          className={isDesktopSize ? styles.fixedWidth : styles.toolsWrapper}
          style={!toolsMenuVisible ? { opacity: 0 } : { opacity: 1 }}
        >
          {/* Slice container */}
          <div className={styles.sliceContainer}>
            <CalciteLabel layout='inline-space-between' scale='l'>
              Enable slice{' '}
              <CalciteSwitch
                checked={sliceEnabled ? true : undefined}
                onCalciteSwitchChange={() => dispatch(toggleSlice())}
              ></CalciteSwitch>
            </CalciteLabel>
            {sliceEnabled ? (
              <div className={styles.sliceOptions}>
                <CalciteButton
                  appearance='outline'
                  width='half'
                  onClick={() => {
                    dispatch(setSlicePlaneOrientation('vertical'));
                  }}
                >
                  Vertical slice
                </CalciteButton>
                <CalciteButton
                  appearance='outline'
                  width='half'
                  onClick={() => {
                    dispatch(setSlicePlaneOrientation('horizontal'));
                  }}
                >
                  Horizontal slice
                </CalciteButton>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* Section container */}
          <div className={styles.sectionContainer}>
            <CalciteLabel layout='inline-space-between' scale='l'>
              Enable section{' '}
              <CalciteSwitch
                checked={sectionEnabled ? true : undefined}
                onCalciteSwitchChange={() => dispatch(toggleSection())}
              ></CalciteSwitch>
            </CalciteLabel>
            {sectionEnabled ? <Section></Section> : <></>}
          </div>
          <OffsetSlider></OffsetSlider>
          <CalciteLabel layout='inline-space-between' scale='l'>
            Display information on hover{' '}
            <CalciteSwitch
              checked={hoverEnabled ? true : undefined}
              onCalciteSwitchChange={() => dispatch(toggleHoverEnabled())}
            ></CalciteSwitch>
          </CalciteLabel>
          <CalciteLabel layout='inline-space-between' scale='l'>
            Display vertical scale{' '}
            <CalciteSwitch
              checked={scaleEnabled ? true : undefined}
              onCalciteSwitchChange={() => dispatch(toggleScaleEnabled())}
            ></CalciteSwitch>
          </CalciteLabel>
          <p className={styles.note}>
            <sup>*</sup>depths are exaggerated 500 times
          </p>
          <LegendContainer></LegendContainer>
          <IsosurfaceSlider></IsosurfaceSlider>
          <p>Bookmarks</p>
          <div className={styles.bookmarks}>
            <Bookmark id={1} title={'2D'}></Bookmark>
            <Bookmark id={2} title={'3D'}></Bookmark>
          </div>
        </div>
      </div>
      {isDesktopSize && (
        <div className={styles.arrowContainer}>
          <button
            className={`${styles.button} ${!toolsMenuVisible ? styles.arrowLeft : ''}`}
            onClick={() => {
              dispatch(setToolsMenuVisible(!toolsMenuVisible));
            }}
          >
            <img src='./assets/arrows-back.svg'></img>
          </button>
        </div>
      )}
    </div>
  );
};

export default ToolsMenu;
