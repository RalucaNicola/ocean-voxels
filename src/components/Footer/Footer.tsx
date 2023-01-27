import { useDispatch, useSelector } from 'react-redux';
import useIsDesktopSize from '../../hooks/useIsDesktopSize';
import { toggleIntroScreen } from '../../store/Map/reducer';
import { selectIntroScreenEnabled } from '../../store/Map/selectors';
import * as styles from './Footer.module.css';

const Footer = () => {
  const introScreenEnabled = useSelector(selectIntroScreenEnabled);
  const isDesktopSize = useIsDesktopSize();
  console.log('from footer component', isDesktopSize);
  const dispatch = useDispatch();
  return (
    (isDesktopSize || introScreenEnabled) && (
      <footer className={styles.appFooter}>
        <p className={styles.esriLogo}>
          <a href='https://www.esri.com/en-us/home' target='_blank'>
            <img src='./assets/esri_science_of_where_white.png'></img>
          </a>
        </p>
        {introScreenEnabled && (
          <p className={styles.attribution}>
            Data attribution{' '}
            <a href='https://www.usgs.gov/' target='_blank'>
              USGS
            </a>{' '}
            <span>|</span>{' '}
            <a href='https://www.noaa.gov/' target='_blank'>
              NOAA
            </a>{' '}
            <span>|</span>{' '}
            <a href='https://www.nasa.gov/' target='_blank'>
              NASA
            </a>{' '}
            <span>|</span>{' '}
            <a href='https://www.fws.gov/' target='_blank'>
              FWS
            </a>{' '}
            <span>|</span>{' '}
            <a href='https://niwa.co.nz/' target='_blank'>
              NIWA
            </a>{' '}
            <span>|</span>{' '}
            <a href='https://www.natureserve.org/' target='_blank'>
              NatureServe
            </a>{' '}
            <span>|</span>{' '}
            <a href='https://mgel.env.duke.edu/' target='_blank'>
              Duke Marine Geospatial Ecology Lab
            </a>{' '}
            <span>|</span>{' '}
            <a href='https://www.grida.no/' target='_blank'>
              Grid Arendal
            </a>{' '}
            <span>|</span>{' '}
            <a href='https://www.whoi.edu/' target='_blank'>
              WHOI
            </a>
            <br></br>
            Built with{' '}
            <a href='https://developers.arcgis.com/javascript/latest/' target='_blank'>
              ArcGIS Maps SDK for JavaScript
            </a>
          </p>
        )}
        {!introScreenEnabled && (
          <button
            className={styles.showIntroButton}
            onClick={() => {
              dispatch(toggleIntroScreen());
            }}
          >
            Show intro
          </button>
        )}
      </footer>
    )
  );
};

export default Footer;
