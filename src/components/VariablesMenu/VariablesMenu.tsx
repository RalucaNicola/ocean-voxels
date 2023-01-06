import * as styles from './VariablesMenu.module.css';
import { useState } from 'react';
import { selectVoxelVariables } from '../../store/Map/selectors';
import { setSelectedVariable } from '../../store/Map/reducer';
import { useSelector, useDispatch } from 'react-redux';

const VariablesMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const voxelVariables = useSelector(selectVoxelVariables);
  const dispatch = useDispatch();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={styles.container}>
      <div>
        <button className={`${styles.button} ${collapsed ? styles.buttonRight : ''}`} onClick={toggleCollapsed}>
          <img src='./assets/arrows-back.svg'></img>
        </button>
      </div>
      <div className={styles.variablesContainer} style={collapsed ? { maxWidth: 0 } : { maxWidth: '1000px' }}>
        <ul className={styles.variablesList}>
          {voxelVariables.map((variable, index) => (
            <li
              key={index}
              className={variable.selected ? styles.selectedVariable : ''}
              onClick={() => {
                dispatch(setSelectedVariable(variable.name));
              }}
            >
              {variable.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VariablesMenu;
