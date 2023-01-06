import * as styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.title}>
      <h1>
        <span className={styles.capitalLetter}>O</span>cean <span className={styles.capitalLetter}>V</span>oxels
      </h1>
    </div>
  );
};

export default Title;
