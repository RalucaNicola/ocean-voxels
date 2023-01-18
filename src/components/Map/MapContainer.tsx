import Map from './Map';
import { WEB_SCENE_ID } from '../../config';
import VoxelLayer from '../VoxelLayer';
import SliceLayer from '../SliceLayer';
import LandLayer from '../LandLayer';

const MapContainer = () => {
  return (
    <Map webmapId={WEB_SCENE_ID}>
      <VoxelLayer></VoxelLayer>
      <LandLayer></LandLayer>
      <SliceLayer></SliceLayer>
    </Map>
  );
};

export default MapContainer;
