import DistanceParameters from 'esri/rest/support/DistanceParameters';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleIntroScreen, setToolsMenuVisible, setVariablesMenuVisible } from '../../store/Map/reducer';
import * as styles from './MobileMenu.module.css';

const MobileMenu = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    setActive(!active);
  };
  return (
    <>
      <button
        onClick={() => {
          toggleMenu();
        }}
        className={styles.mobileMenuButton}
      >
        <svg width='50px' height='25px'>
          <line className={styles.menuLine} x1='1.5' y1='1.5' x2='48.5' y2='1.5' />
          <line className={styles.menuLine} x1='1.5' y1='12.5' x2='36.5' y2='12.5' />
          <line className={styles.menuLine} x1='1.5' y1='23.5' x2='36.5' y2='23.5' />
        </svg>
      </button>
      <div className={styles.mobileMenuContainer} style={{ display: active ? 'block' : 'none' }}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          <img src='./assets/close.svg'></img>
        </button>
        <ul className={styles.mobileMenuList}>
          <li>
            <button
              onClick={() => {
                toggleMenu();
                dispatch(setToolsMenuVisible(false));
                dispatch(setVariablesMenuVisible(true));
              }}
            >
              Variables
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                toggleMenu();
                dispatch(setToolsMenuVisible(true));
                dispatch(setVariablesMenuVisible(false));
              }}
            >
              Tools
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                toggleMenu();
                dispatch(toggleIntroScreen());
              }}
            >
              Intro
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
