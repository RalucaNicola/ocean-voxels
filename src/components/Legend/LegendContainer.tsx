import { selectVariable, selectLegendInfo, selectLegendInfos } from '../../store/Map/selectors';
import { useSelector, useDispatch } from 'react-redux';
import ContinuousLegend from './ContinuousLegend';
import { LegendInfo, VoxelVariable } from '../../types/types';
import { setLegendInfos } from '../../store/Map/reducer';
import DiscreteLegend from './DiscreteLegend';

const LegendContainer = () => {
  const selectedVariable: VoxelVariable = useSelector(selectVariable);
  const selectedLegendInfo: LegendInfo = useSelector(selectLegendInfo);
  const legendInfos: LegendInfo[] = useSelector(selectLegendInfos);
  const dispatch = useDispatch();
  return (
    <div>
      {selectedVariable ? (
        selectedVariable.continuous ? (
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
        )
      ) : (
        'loading'
      )}
    </div>
  );
};

export default LegendContainer;
