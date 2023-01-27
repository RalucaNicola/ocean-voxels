import * as styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.title}>
        <h1>
          <span className={styles.capitalLetter}>O</span>cean <span className={styles.capitalLetter}>V</span>oxels
        </h1>
      </div>
      <button
        onClick={() => {
          console.log('menu button');
        }}
        className={styles.mobileMenuButton}
      >
        <svg width='50px' height='25px'>
          <line className={styles.menuLine} x1='1.5' y1='1.5' x2='36.5' y2='1.5' />
          <line className={styles.menuLine} x1='1.5' y1='12.5' x2='36.5' y2='12.5' />
          <line className={styles.menuLine} x1='1.5' y1='23.5' x2='36.5' y2='23.5' />
        </svg>
      </button>
    </div>
  );
};

export default Title;
