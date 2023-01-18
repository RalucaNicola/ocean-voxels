import { EMU_INFO_DATA } from '../../config';
import { LegendInfo, LegendProps, VoxelUniqueValue } from '../../types/types';
import * as styles from './DiscreteLegend.module.css';

interface ListItemProps {
  enabled: boolean;
  color: { r: number; g: number; b: number; a: number };
  value: number;
  setClick: (value: number) => void;
}

interface DiscreteLegendProps extends LegendProps {
  changedLegendSelection(legendInfo: LegendInfo): void;
}

const ListItem = ({ enabled, color, value, setClick }: ListItemProps) => {
  let backgroundColor, fontColor;
  const { r, g, b, a } = color;
  if (enabled) {
    backgroundColor = `rgba(${r} ${g} ${b} / ${a * 100}%)`;
    fontColor = 'black';
  } else {
    backgroundColor = 'rgba(255 255 255 / 15%)';
    fontColor = 'rgb(210, 210, 210)';
  }
  return (
    <li
      value={value}
      style={{ backgroundColor, color: fontColor }}
      onClick={() => {
        setClick(value);
      }}
    >
      <div className={styles.emuNumber}>
        EMU<br></br>
        {value}
      </div>
      <div className={styles.emuName} style={{ borderColor: fontColor }}>
        {EMU_INFO_DATA.filter((d) => d.id === value)[0]?.description}
      </div>
    </li>
  );
};

const DiscreteLegend = ({ legendInfo, changedLegendSelection }: DiscreteLegendProps) => {
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

  return (
    <ul className={styles.emuList}>
      {legendInfo.uniqueValues.map((uv, index) => {
        if (uv.value >= 0 && uv.value <= 37) {
          return (
            <ListItem
              enabled={uv.enabled}
              color={uv.color}
              value={uv.value}
              setClick={toggleVisibility}
              key={index}
            ></ListItem>
          );
        }
      })}
    </ul>
  );
};

export default DiscreteLegend;
