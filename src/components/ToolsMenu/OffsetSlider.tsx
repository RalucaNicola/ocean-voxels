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
      Offset from ground
      <CalciteSlider
        min={0}
        max={2 * Math.pow(10, 6)}
        value={offsetFromGround}
        step={10000}
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
