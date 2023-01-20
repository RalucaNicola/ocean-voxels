import MapContainer from '../Map/MapContainer';
import VariablesMenu from '../VariablesMenu';
import Title from '../Title';
import Footer from '../Footer';
import ToolsMenu from '../ToolsMenu';
import Tooltip from '../Tooltip';
import Intro from '../Intro';

const App = () => {
  return (
    <div>
      <MapContainer></MapContainer>
      <VariablesMenu></VariablesMenu>
      <ToolsMenu></ToolsMenu>
      <Tooltip></Tooltip>
      <Intro></Intro>
      <Title></Title>
      <Footer></Footer>
    </div>
  );
};

export default App;
