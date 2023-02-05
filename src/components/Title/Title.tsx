import * as styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.title}>
        <h1>
          <span className={styles.capitalLetter}>E</span>cological <span className={styles.capitalLetter}>M</span>arine{' '}
          <span className={styles.capitalLetter}>U</span>nits
        </h1>
      </div>
    </div>
  );
};

export default Title;
