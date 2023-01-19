import * as styles from './Tooltip.module.css';
import { useSelector } from 'react-redux';
import { selectTooltipData, selectTooltipPosition } from '../../store/Map/selectors';
import { useRef } from 'react';

const TooltipContainer = () => {
  const elementRef = useRef();
  const position = useSelector(selectTooltipPosition);

  const data = useSelector(selectTooltipData);

  if (!position) {
    return null;
  }

  return (
    <div
      ref={elementRef}
      className={styles.tooltipContainer}
      style={{
        left: position.x - 100,
        top: position.y + 20,
        width: 200
      }}
    >
      {data.variableLabel && <p className={styles.tooltipTitle}>{data.variableLabel}</p>}
      <p>
        <span style={{ backgroundColor: data.color }} className={styles.colorFill}></span>
        {data.value} {data.unit}
      </p>
      <p>Depth: {data.depth}</p>
    </div>
  );
};

export default TooltipContainer;
