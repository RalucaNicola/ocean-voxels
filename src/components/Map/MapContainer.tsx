import Map from './Map';
import { WEB_SCENE_ID } from '../../config';
import VoxelLayer from '../VoxelLayer';
import SliceLayer from '../SliceLayer';

const MapContainer = () => {
  return (
    <Map webmapId={WEB_SCENE_ID}>
      <VoxelLayer></VoxelLayer>
      <SliceLayer></SliceLayer>
    </Map>
  );
};

export default MapContainer;
