import * as styles from './ToolsMenu.module.css';
import { useState } from 'react';
import '@esri/calcite-components/dist/components/calcite-switch';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-button';
import { CalciteButton, CalciteLabel, CalciteSwitch } from '@esri/calcite-components-react';
import LegendContainer from '../Legend/LegendContainer';
import { selectSliceEnabled } from '../../store/Map/selectors';
import { setSlicePlaneOrientation } from '../../store/Map/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSlice } from '../../store/Map/reducer';

const ToolsMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const sliceEnabled = useSelector(selectSliceEnabled);
  const dispatch = useDispatch();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={styles.container}>
      <div className={styles.toolsContainer} style={collapsed ? { maxWidth: '0' } : { maxWidth: '30vw' }}>
        {' '}
        <div className={styles.fixedWidth} style={collapsed ? { opacity: 0 } : { opacity: 1 }}>
          <div className={styles.sliceContainer}>
            <CalciteLabel layout='inline-space-between'>
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

          <LegendContainer></LegendContainer>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <button className={`${styles.button} ${collapsed ? styles.arrowLeft : ''}`} onClick={toggleCollapsed}>
          <img src='./assets/arrows-back.svg'></img>
        </button>
      </div>
    </div>
  );
};

export default ToolsMenu;
