import { selectVariable, selectLegendInfo, selectLegendInfos } from '../../store/Map/selectors';
import { useSelector, useDispatch } from 'react-redux';
import ContinuousLegend from './ContinuousLegend';
import { LegendInfo, VoxelVariable } from '../../types/types';
import { setLegendInfos } from '../../store/Map/reducer';
import DiscreteLegend from './DiscreteLegend';
import { EMU_UNITS } from '../../config';

const LegendContainer = () => {
  const selectedVariable: VoxelVariable = useSelector(selectVariable);
  const selectedLegendInfo: LegendInfo = useSelector(selectLegendInfo);
  const legendInfos: LegendInfo[] = useSelector(selectLegendInfos);
  const dispatch = useDispatch();

  return (
    <div>
      {selectedVariable ? (
        <div>
          <p>
            {selectedVariable.name}{' '}
            {EMU_UNITS[selectedVariable.name] ? ` - measured in ${EMU_UNITS[selectedVariable.name]}` : ''}
          </p>
          {selectedVariable.continuous ? (
            <ContinuousLegend legendInfo={selectedLegendInfo}></ContinuousLegend>
          ) : (
            <DiscreteLegend
              legendInfo={selectedLegendInfo}
              changedLegendSelection={(discreteLegendInfo: LegendInfo) => {
                const updatedLegendInfos = legendInfos.map((info) => {
                  if (info.id === selectedVariable.id) {
                    return discreteLegendInfo;
                  }
                  return info;
                });
                dispatch(setLegendInfos(updatedLegendInfos));
              }}
            ></DiscreteLegend>
          )}
        </div>
      ) : (
        'Loading legend...'
      )}
    </div>
  );
};

export default LegendContainer;
