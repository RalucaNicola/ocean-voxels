import * as styles from './VariablesMenu.module.css';
import { selectVariablesMenuVisible, selectVoxelVariables } from '../../store/Map/selectors';
import { setSelectedVariable, setVariablesMenuVisible } from '../../store/Map/reducer';
import { useSelector, useDispatch } from 'react-redux';

const VariablesMenu = () => {
  const variablesMenuVisible = useSelector(selectVariablesMenuVisible);
  const voxelVariables = useSelector(selectVoxelVariables);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div>
        <button
          className={`${styles.button} ${!variablesMenuVisible ? styles.buttonRight : ''}`}
          onClick={() => {
            dispatch(setVariablesMenuVisible(!variablesMenuVisible));
          }}
        >
          <img src='./assets/arrows-back.svg'></img>
        </button>
      </div>
      <div
        className={styles.variablesContainer}
        style={!variablesMenuVisible ? { maxWidth: 0, opacity: 0 } : { maxWidth: '1000px', opacity: 1 }}
      >
        <ul className={styles.variablesList}>
          {voxelVariables.map((variable, index) => (
            <li
              key={index}
              className={variable.selected ? styles.selectedVariable : ''}
              onClick={() => {
                dispatch(setSelectedVariable(variable.id));
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
