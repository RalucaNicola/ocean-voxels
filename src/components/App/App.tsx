import * as styles from './App.module.css';
import Switch from '../Switch';
import MapContainer from '../Map/MapContainer';
import VariablesMenu from '../VariablesMenu';

const App = () => {
  return (
    <div>
      <MapContainer></MapContainer>
      <div className={styles.menu}>
        <Switch></Switch>
      </div>
      <VariablesMenu></VariablesMenu>
    </div>
  );
};

export default App;
