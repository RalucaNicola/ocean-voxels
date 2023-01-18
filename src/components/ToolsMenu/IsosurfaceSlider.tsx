import * as styles from './ToolsMenu.module.css';
import { selectIsosurfaceEnabled, selectVariable } from '../../store/Map/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { VoxelVariable } from '../../types/types';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-slider';
import { CalciteLabel, CalciteSlider, CalciteSwitch } from '@esri/calcite-components-react';
import { setSelectedIsosurfaceValue, toggleIsosurface } from '../../store/Map/reducer';

const IsosurfaceSlider = () => {
  const selectedVariable: VoxelVariable = useSelector(selectVariable);
  const isosurfaceEnabled = useSelector(selectIsosurfaceEnabled);
  const dispatch = useDispatch();

  return (
    <div>
      {selectedVariable && selectedVariable.continuous ? (
        <div>
          <CalciteLabel layout='inline-space-between' scale='l'>
            Display isosurface{' '}
            <CalciteSwitch
              checked={isosurfaceEnabled ? true : undefined}
              onCalciteSwitchChange={() => dispatch(toggleIsosurface())}
            ></CalciteSwitch>
          </CalciteLabel>
          {isosurfaceEnabled ? (
            <>
              <img className={styles.surfaceGraphic} src='./assets/isosurface.png'></img>
              <CalciteSlider
                className={styles.slider}
                min={selectedVariable.range[0]}
                max={selectedVariable.range[1]}
                value={selectedVariable.isosurfaceValue}
                scale={'l'}
                step={0.1}
                groupSeparator={true}
                labelHandles={true}
                onCalciteSliderInput={(evt) => {
                  const value = evt.target.value as number;
                  dispatch(setSelectedIsosurfaceValue({ id: selectedVariable.id, isosurfaceValue: value }));
                }}
              ></CalciteSlider>
            </>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default IsosurfaceSlider;
