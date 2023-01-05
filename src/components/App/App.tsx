import * as styles from './App.module.css';
import Switch from '../Switch';
import MapContainer from '../Map/MapContainer';

const App = () => {
  return (
    <div>
      <MapContainer></MapContainer>
      <div className={styles.menu}>
        <Switch></Switch>
      </div>
    </div>
  );
};

export default App;
