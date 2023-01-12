import MapContainer from '../Map/MapContainer';
import VariablesMenu from '../VariablesMenu';
import Title from '../Title';
import Footer from '../Footer';
import ToolsMenu from '../ToolsMenu';

const App = () => {
  return (
    <div>
      <MapContainer></MapContainer>
      <VariablesMenu></VariablesMenu>
      <ToolsMenu></ToolsMenu>
      <Title></Title>
      <Footer></Footer>
    </div>
  );
};

export default App;
