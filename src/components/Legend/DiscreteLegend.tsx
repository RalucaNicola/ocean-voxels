import { EMU_INFO_DATA } from '../../config';
import { LegendInfo, LegendProps, VoxelUniqueValue } from '../../types/types';
import * as styles from './DiscreteLegend.module.css';
import '@esri/calcite-components/dist/components/calcite-button';
import { CalciteButton, CalciteLabel, CalciteSwitch } from '@esri/calcite-components-react';
import { useState } from 'react';

interface ListItemProps {
  enabled: boolean;
  color: { r: number; g: number; b: number; a: number };
  value: number;
  setClick: (value: number) => void;
}

interface DiscreteLegendProps extends LegendProps {
  changedLegendSelection(legendInfo: LegendInfo): void;
}

const getEmuInfo = (value: number) => {
  return EMU_INFO_DATA.filter((d) => d.id === value)[0];
};

const ListItem = ({ enabled, color, value, setClick }: ListItemProps) => {
  const { r, g, b } = color;
  const emuInfo = getEmuInfo(value);
  const backgroundColor = enabled ? `rgba(${r} ${g} ${b} / 80%)` : 'rgba(255 255 255 / 15%)';

  if (emuInfo) {
    return (
      <li
        value={value}
        style={{ backgroundColor }}
        onClick={() => {
          setClick(value);
        }}
      >
        <div className={styles.emuNumber}>
          EMU<br></br>
          {value}
        </div>
        <div className={styles.emuName}>
          {emuInfo.region && <div className={styles.emuRegion}>{emuInfo.region}</div>}
          <div className={styles.emuCommon}>{emuInfo.common}</div>
          {emuInfo.hasOwnProperty('percent') && (
            <div className={styles.emuPercent}>{emuInfo.percent}% of global marine volume</div>
          )}
        </div>
      </li>
    );
  } else {
    return <></>;
  }
};

const DiscreteLegend = ({ legendInfo, changedLegendSelection }: DiscreteLegendProps) => {
  const categorySelectionAll = legendInfo.uniqueValues.reduce(
    (accumulator, currentValue) => accumulator && currentValue.enabled,
    legendInfo.uniqueValues[0].enabled
  );
  const categorySelectionNone = !legendInfo.uniqueValues.reduce(
    (accumulator, currentValue) => accumulator || currentValue.enabled,
    legendInfo.uniqueValues[0].enabled
  );
  const toggleVisibility = (value: number) => {
    const updatedUniqueValues: VoxelUniqueValue[] = [];
    legendInfo.uniqueValues.forEach((uv) => {
      if (uv.value === value) {
        updatedUniqueValues.push({ ...uv, enabled: !uv.enabled });
      } else {
        updatedUniqueValues.push({ ...uv });
      }
    });
    const updatedLegendInfo: LegendInfo = {
      ...legendInfo,
      uniqueValues: updatedUniqueValues
    };
    changedLegendSelection(updatedLegendInfo);
  };
  const [sortByVolume, setSortByVolume] = useState(false);

  return (
    <>
      <div className={styles.selectOptions}>
        <CalciteButton
          appearance='outline'
          width='half'
          disabled={categorySelectionAll ? true : undefined}
          onClick={() => {
            const updatedUniqueValues: VoxelUniqueValue[] = [];
            legendInfo.uniqueValues.forEach((uv) => {
              updatedUniqueValues.push({ ...uv, enabled: true });
            });
            const updatedLegendInfo: LegendInfo = {
              ...legendInfo,
              uniqueValues: updatedUniqueValues
            };
            changedLegendSelection(updatedLegendInfo);
          }}
        >
          Select all
        </CalciteButton>
        <CalciteButton
          appearance='outline'
          width='half'
          disabled={categorySelectionNone ? true : undefined}
          onClick={() => {
            const updatedUniqueValues: VoxelUniqueValue[] = [];
            legendInfo.uniqueValues.forEach((uv) => {
              updatedUniqueValues.push({ ...uv, enabled: false });
            });
            const updatedLegendInfo: LegendInfo = {
              ...legendInfo,
              uniqueValues: updatedUniqueValues
            };
            changedLegendSelection(updatedLegendInfo);
          }}
        >
          Select none
        </CalciteButton>
      </div>
      <div className={styles.sortOptions}>
        <CalciteLabel layout='inline-space-between' scale='l'>
          Sort by marine unit volume{' '}
          <CalciteSwitch
            checked={sortByVolume ? true : undefined}
            onCalciteSwitchChange={() => setSortByVolume(!sortByVolume)}
          ></CalciteSwitch>
        </CalciteLabel>
      </div>
      <ul className={styles.emuList}>
        {[...legendInfo.uniqueValues]
          .sort((lInfo1, lInfo2) => {
            if (sortByVolume) {
              const percent1: number = getEmuInfo(lInfo1.value).percent || 0;
              const percent2: number = getEmuInfo(lInfo2.value).percent || 0;
              return percent2 - percent1;
            }
            return lInfo1.value - lInfo2.value;
          })
          .map((uv, index) => {
            return (
              <ListItem
                enabled={uv.enabled}
                color={uv.color}
                value={uv.value}
                setClick={toggleVisibility}
                key={index}
              ></ListItem>
            );
          })}
      </ul>
    </>
  );
};

export default DiscreteLegend;
