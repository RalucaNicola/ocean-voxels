import Map from './Map';
import { WEB_SCENE_ID } from '../../config';
import VoxelLayer from '../VoxelLayer';

const MapContainer = () => {
  return (
    <Map webmapId={WEB_SCENE_ID}>
      <VoxelLayer></VoxelLayer>
    </Map>
  );
};

export default MapContainer;
