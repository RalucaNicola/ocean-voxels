import * as styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.appFooter}>
      <p className={styles.esriLogo}>
        <a href='https://www.esri.com/en-us/home' target='_blank'>
          <img src='./assets/esri_science_of_where_white.png'></img>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
