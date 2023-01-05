import * as styles from './VariablesMenu.module.css';
import { useState } from 'react';

const variables = [
  'temperature',
  'salinity',
  'dissolved O2',
  'phosphate',
  'nitrate',
  'silicate',
  'ecological marine units'
];

const VariablesMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedVariable, setSelectedVariable] = useState('nitrate');
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const selectVariable = (variable: string) => {
    setSelectedVariable(variable);
  };
  return (
    <div className={styles.container}>
      <div>
        <button className={`${styles.button} ${collapsed ? styles.buttonRight : ''}`} onClick={toggleCollapsed}>
          <img src='/assets/arrows-back.svg'></img>
        </button>
      </div>
      <div className={styles.variablesContainer} style={collapsed ? { maxWidth: 0 } : { maxWidth: '1000px' }}>
        <ul className={styles.variablesList}>
          {variables.map((variable, index) => (
            <li
              key={index}
              className={variable === selectedVariable ? styles.selectedVariable : ''}
              onClick={() => {
                selectVariable(variable);
              }}
            >
              {variable}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VariablesMenu;
