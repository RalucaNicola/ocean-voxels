import * as styles from './VariablesMenu.module.css';
import { selectToolsMenuVisible, selectVariablesMenuVisible, selectVoxelVariables } from '../../store/Map/selectors';
import { setSelectedVariable, setVariablesMenuVisible, setToolsMenuVisible } from '../../store/Map/reducer';
import { useSelector, useDispatch } from 'react-redux';
import useIsDesktopSize from '../../hooks/useIsDesktopSize';
import { useEffect } from 'react';

const VariablesMenu = () => {
  const variablesMenuVisible = useSelector(selectVariablesMenuVisible);
  const toolsMenuVisible = useSelector(selectToolsMenuVisible);
  const voxelVariables = useSelector(selectVoxelVariables);
  const isDesktopSize = useIsDesktopSize();
  const dispatch = useDispatch();
  useEffect(() => {
    // in case both menus are open, we need to choose one on mobile
    if (!isDesktopSize && variablesMenuVisible && toolsMenuVisible) {
      dispatch(setToolsMenuVisible(false));
      console.log('I ran');
    }
  }, [isDesktopSize, variablesMenuVisible, toolsMenuVisible]);

  return (
    <div className={isDesktopSize ? styles.container : styles.mobileContainer}>
      {isDesktopSize && (
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
      )}
      <div
        className={styles.variablesContainer}
        style={!variablesMenuVisible ? { maxWidth: 0, opacity: 0, height: 0 } : { maxWidth: '1000px', opacity: 1 }}
      >
        {!isDesktopSize && (
          <div className={styles.closeHeader}>
            <h2>Variables</h2>
            <button
              className={styles.closeButton}
              onClick={() => {
                dispatch(setVariablesMenuVisible(false));
              }}
            >
              <img src='./assets/close.svg'></img>
            </button>
          </div>
        )}
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
