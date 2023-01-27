import * as styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.title}>
        <h1>
          <span className={styles.capitalLetter}>O</span>cean <span className={styles.capitalLetter}>V</span>oxels
        </h1>
      </div>
    </div>
  );
};

export default Title;
