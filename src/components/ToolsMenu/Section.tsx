import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-slider';
import { CalciteLabel, CalciteSlider } from '@esri/calcite-components-react';

import { setSectionParameters } from '../../store/Map/reducer';
import { selectSectionParameters } from '../../store/Map/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Section = () => {
  const sectionParameters = useSelector(selectSectionParameters);
  const dispatch = useDispatch();
  return (
    <div>
      <CalciteLabel>
        Latitude:
        <CalciteSlider
          min={-90}
          max={90}
          value={sectionParameters.y}
          step={1}
          scale={'l'}
          labelHandles={true}
          onCalciteSliderInput={(evt) => {
            const value = evt.target.value as number;
            dispatch(setSectionParameters({ ...sectionParameters, y: value }));
          }}
        ></CalciteSlider>
      </CalciteLabel>
      <CalciteLabel>
        Longitude:
        <CalciteSlider
          min={-180}
          max={180}
          step={1}
          labelHandles={true}
          value={sectionParameters.x}
          onCalciteSliderInput={(evt) => {
            const value = evt.target.value as number;
            dispatch(setSectionParameters({ ...sectionParameters, x: value }));
          }}
        ></CalciteSlider>
      </CalciteLabel>
      <CalciteLabel>
        Tilt:
        <CalciteSlider
          min={0}
          max={90}
          step={1}
          labelHandles={true}
          value={sectionParameters.tilt}
          onCalciteSliderInput={(evt) => {
            const value = evt.target.value as number;
            dispatch(setSectionParameters({ ...sectionParameters, tilt: value }));
          }}
        ></CalciteSlider>
      </CalciteLabel>
      <CalciteLabel>
        Orientation:
        <CalciteSlider
          min={0}
          max={360}
          step={1}
          labelHandles={true}
          value={sectionParameters.orientation}
          onCalciteSliderInput={(evt) => {
            const value = evt.target.value as number;
            dispatch(setSectionParameters({ ...sectionParameters, orientation: value }));
          }}
        ></CalciteSlider>
      </CalciteLabel>
    </div>
  );
};

export default Section;
