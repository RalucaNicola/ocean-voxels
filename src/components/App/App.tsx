import MapContainer from '../Map/MapContainer';
import VariablesMenu from '../VariablesMenu';
import Title from '../Title';
import Footer from '../Footer';
import ToolsMenu from '../ToolsMenu';
import Tooltip from '../Tooltip';
import Intro from '../Intro';
import MobileMenu from '../MobileMenu';

const App = () => {
  return (
    <div>
      <MapContainer></MapContainer>
      <VariablesMenu></VariablesMenu>
      <ToolsMenu></ToolsMenu>
      <Tooltip></Tooltip>
      <MobileMenu></MobileMenu>
      <Intro></Intro>
      <Footer></Footer>
      <Title></Title>
    </div>
  );
};

export default App;
