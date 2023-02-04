import * as styles from './ToolsMenu.module.css';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-slider';
import { CalciteLabel, CalciteSlider } from '@esri/calcite-components-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOffsetFromGround } from '../../store/Map/selectors';
import { setOffsetFromGround } from '../../store/Map/reducer';

const OffsetSlider = () => {
  const offsetFromGround = useSelector(selectOffsetFromGround);
  const dispatch = useDispatch();
  return (
    <CalciteLabel scale='l'>
      Offset from ground in km:
      <CalciteSlider
        className={styles.slider}
        min={2500}
        max={5000}
        value={offsetFromGround}
        step={100}
        scale={'l'}
        snap={true}
        groupSeparator={true}
        labelHandles={true}
        onCalciteSliderInput={(evt) => {
          const value = evt.target.value as number;
          dispatch(setOffsetFromGround(value));
        }}
      ></CalciteSlider>
    </CalciteLabel>
  );
};

export default OffsetSlider;
