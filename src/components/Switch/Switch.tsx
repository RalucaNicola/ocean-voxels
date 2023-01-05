import { useDispatch, useSelector } from 'react-redux';
import '@esri/calcite-components/dist/components/calcite-switch';
import '@esri/calcite-components/dist/components/calcite-label';
import { CalciteLabel, CalciteSwitch } from '@esri/calcite-components-react';
import { selectShowVoxel } from '../../store/Map/selectors';
import { voxelToggled } from '../../store/Map/reducer';
const Switch = () => {
  const showVoxel = useSelector(selectShowVoxel);
  const dispatch = useDispatch();
  return (
    <CalciteLabel layout='inline-space-between'>
      Voxel layer visibility
      <CalciteSwitch
        scale='m'
        checked={showVoxel ? true : undefined}
        onCalciteSwitchChange={() => {
          dispatch(voxelToggled());
        }}
      ></CalciteSwitch>
    </CalciteLabel>
  );
};

export default Switch;
