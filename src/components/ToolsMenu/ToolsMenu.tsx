import * as styles from './ToolsMenu.module.css';
import { useState } from 'react';

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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra turpis id est dictum cursus. Maecenas
            tellus massa, varius nec condimentum eu, lacinia id eros. Donec vel placerat ligula, dapibus consectetur
            odio. Suspendisse a aliquet eros. Praesent vestibulum lorem quis elit efficitur, sit amet fringilla metus
            aliquam. Pellentesque eget cursus erat. Proin non ornare lectus, quis eleifend diam. Vestibulum ultricies
            mauris et purus vehicula gravida. Donec molestie vehicula metus a consequat. Nunc rhoncus mi lectus, quis
            pretium orci consequat eget. Nullam ut congue urna. Fusce rutrum accumsan volutpat. Duis nec laoreet augue.
            Aenean a facilisis eros. Quisque eros tellus, tristique at interdum at, congue ac diam. Curabitur quis
            dapibus enim, at mollis dui. Maecenas ornare imperdiet aliquam. Aenean est eros, fermentum eu rutrum id,
            bibendum eu metus.
          </p>
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
