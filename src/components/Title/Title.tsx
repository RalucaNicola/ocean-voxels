import * as styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.title}>
        <h1>
          <span className={styles.capitalLetter}>3D</span> <span className={styles.capitalLetter}>O</span>cean{' '}
          <span className={styles.capitalLetter}>E</span>xplorer
        </h1>
      </div>
    </div>
  );
};

export default Title;
