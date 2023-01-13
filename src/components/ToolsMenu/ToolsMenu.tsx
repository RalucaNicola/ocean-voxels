import * as styles from './ToolsMenu.module.css';
import { useState } from 'react';

import LegendContainer from '../Legend/LegendContainer';

const ToolsMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={styles.container}>
      <div className={styles.toolsContainer} style={collapsed ? { maxWidth: '0' } : { maxWidth: '30vw' }}>
        {' '}
        <div className={styles.fixedWidth} style={collapsed ? { opacity: 0 } : { opacity: 1 }}>
          <LegendContainer></LegendContainer>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <button className={`${styles.button} ${collapsed ? styles.arrowLeft : ''}`} onClick={toggleCollapsed}>
          <img src='./assets/arrows-back.svg'></img>
        </button>
      </div>
    </div>
  );
};

export default ToolsMenu;
