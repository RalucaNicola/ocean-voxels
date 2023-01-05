import { FC, useEffect, useState } from 'react';

import ISceneView from 'esri/views/SceneView';
import IVoxelLayer from 'esri/layers/VoxelLayer';
import { useSelector } from 'react-redux';
import { selectShowVoxel } from '../../store/Map/selectors';
import { VOXEL_LAYER_TITLE } from '../../constants';

type Props = {
  view?: ISceneView;
};

const VoxelLayer: FC<Props> = ({ view }: Props) => {
  const visible = useSelector(selectShowVoxel);
  const [layer, setLayer] = useState<IVoxelLayer>();

  useEffect(() => {
    if (layer) {
      layer.visible = visible;
    }
  }, [layer, visible]);

  useEffect(() => {
    if (view) {
      const layer = view.map.layers.find((layer) => layer.title === VOXEL_LAYER_TITLE) as IVoxelLayer;
      setLayer(layer);
    }
  }, [view]);

  return null;
};

export default VoxelLayer;
