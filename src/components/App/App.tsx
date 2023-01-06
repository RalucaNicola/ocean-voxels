import * as styles from './App.module.css';
import Switch from '../Switch';
import MapContainer from '../Map/MapContainer';
import VariablesMenu from '../VariablesMenu';
import Title from '../Title';
import Footer from '../Footer';

const App = () => {
  return (
    <div>
      <MapContainer></MapContainer>
      <div className={styles.menu}>
        <Switch></Switch>
      </div>
      <VariablesMenu></VariablesMenu>
      <Title></Title>
      <Footer></Footer>
    </div>
  );
};

export default App;
